import React from "react";
import Section from "../common/Section";
import NumberInput from "../common/NumberInput";
import { useSurvey } from "../../state/SurveyContext";

export default function IntroductionSection() {
  const { state, dispatch } = useSurvey();
  const { pageCount } = state.content.intro;

  return (
    <Section
      number="A"
      title="Introduction"
      description="Start by choosing how many question pages your campaign needs."
    >
      <div className="grid gap-5 md:grid-cols-[220px_1fr] md:items-end">
        <div>
          <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-soft">Survey pages</label>
          <NumberInput value={pageCount} min={1} max={30} suffix="pages" onChange={(count) => dispatch({ type: "SET_PAGE_COUNT", count })} />
          <p className="mt-2 text-[11px] text-muted">Use the ↑ / ↓ controls or your keyboard.</p>
        </div>
        <div className="rounded-2xl border border-pine/10 bg-pine-soft/50 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-pine shadow-sm">
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5"><path d="M5 4h10M5 8h10M5 12h6M5 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </div>
            <div>
              <p className="text-[12px] font-semibold text-pine">Live structure</p>
              <p className="text-[11px] text-ink-soft">Questions are created automatically as you change the count.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {state.content.questions.map((q, i) => (
          <span key={q.id} className="rounded-full border border-line bg-white px-3 py-1.5 text-[11.5px] font-medium text-ink-soft shadow-sm">
            {String(i + 1).padStart(2, "0")} · Question {i + 1}
          </span>
        ))}
      </div>
    </Section>
  );
}
