import React, { useEffect, useMemo, useState } from "react";
import { useSurvey } from "../../state/SurveyContext";
import QuestionPreviewCard from "./QuestionPreviewCard";
import ThankYouPreviewCard from "./ThankYouPreviewCard";
import CrossIcon from "./CrossIcon";
import { radiusToCss } from "../../lib/styleUtils";

export default function MobilePreview() {
  const { state } = useSurvey();
  const { questions, thankYou } = state.content;
  const { appearance } = state.styling;

  const pages = useMemo(() => {
    const p = questions.map((q) => ({ type: "question", question: q }));
    if (thankYou.enabled) p.push({ type: "thankYou" });
    return p;
  }, [questions, thankYou.enabled]);

  const [pageIndex, setPageIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [comments, setComments] = useState({});
  const [visible, setVisible] = useState(appearance.displayDelay === 0);

  // Keep index in range as questions are added/removed
  useEffect(() => {
    if (pageIndex > pages.length - 1) setPageIndex(Math.max(0, pages.length - 1));
  }, [pages.length, pageIndex]);

  // Simulate the configured display delay
  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), Math.max(0, appearance.displayDelay) * 1000);
    return () => clearTimeout(t);
  }, [appearance.displayDelay]);

  const restart = () => {
    setPageIndex(0);
    setAnswers({});
    setComments({});
  };

  const goToNextFor = (question) => {
    const selectedId = answers[question.id];
    const match = question.logic.enabled
      ? question.logic.conditions.find((c) => c.optionId === selectedId)
      : null;

    if (match) {
      if (match.redirectTo === "submit") {
        setPageIndex(pages.length - 1 === pageIndex ? pageIndex : pages.findIndex((p) => p.type === "thankYou"));
        return;
      }
      if (match.redirectTo === "next") {
        setPageIndex((i) => Math.min(i + 1, pages.length - 1));
        return;
      }
      const targetIndex = pages.findIndex((p) => p.type === "question" && p.question.id === match.redirectTo);
      if (targetIndex !== -1) {
        setPageIndex(targetIndex);
        return;
      }
    }
    setPageIndex((i) => Math.min(i + 1, pages.length - 1));
  };

  const current = pages[pageIndex];
  const cardCss = {
    backgroundColor: appearance.backgroundColor,
    ...radiusToCss(appearance.cornerRadius),
  };

  return (
    <div
      className="flex h-full flex-col items-center justify-center rounded-3xl bg-dot-grid p-8"
      style={{ backgroundColor: appearance.backdropColor + Math.round((appearance.backdropOpacity / 100) * 255).toString(16).padStart(2, "0") }}
    >
      <div className="mb-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-medium text-ink-soft shadow-sm backdrop-blur">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-pine" />
        Live preview
        {appearance.displayDelay > 0 && <span className="text-muted">· {appearance.displayDelay}s reveal delay</span>}
      </div>

      <div className="relative h-[600px] w-[300px] rounded-[2.6rem] border-[10px] border-ink bg-ink shadow-2xl">
        <div className="absolute left-1/2 top-0 z-10 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-ink" />
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-white">
          {!visible ? (
            <div className="flex h-full items-center justify-center text-[12px] text-muted">Waiting to appear…</div>
          ) : !pages.length ? (
            <div className="flex h-full items-center justify-center px-6 text-center text-[12.5px] text-muted">
              Add a question or enable the thank you page to see a live preview.
            </div>
          ) : (
            <div className="flex h-full flex-col" style={cardCss}>
              <div className="flex items-center justify-between px-4 pt-4">
                <span className="text-[10.5px] font-medium text-muted">
                  {current.type === "question" ? `${pageIndex + 1} / ${questions.length}` : "Complete"}
                </span>
                {current.type === "question" && (
                  <CrossIcon config={state.styling.crossButton} onClick={restart} />
                )}
              </div>

              <div className="min-h-0 flex-1">
                {current.type === "question" ? (
                  <QuestionPreviewCard
                    question={current.question}
                    styling={state.styling}
                    selectedOptionId={answers[current.question.id]}
                    onSelectOption={(optId) => setAnswers((a) => ({ ...a, [current.question.id]: optId }))}
                    comment={comments[current.question.id] || ""}
                    onCommentChange={(v) => setComments((c) => ({ ...c, [current.question.id]: v }))}
                    onSubmit={() => goToNextFor(current.question)}
                  />
                ) : (
                  <ThankYouPreviewCard thankYou={thankYou} styling={state.styling.thankYouPage} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {pages.length > 1 && (
        <div className="mt-5 flex items-center gap-1.5">
          {pages.map((p, i) => (
            <button
              key={i}
              onClick={() => setPageIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === pageIndex ? "w-5 bg-gold" : "w-1.5 bg-white/40"
              }`}
              title={p.type === "question" ? `Question ${i + 1}` : "Thank you page"}
            />
          ))}
        </div>
      )}
      <button onClick={restart} className="mt-3 text-[11.5px] font-medium text-white/70 hover:text-white">
        Restart preview
      </button>
    </div>
  );
}
