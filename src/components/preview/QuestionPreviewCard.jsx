import React from "react";
import OptionRow from "./OptionRow";
import { textStyleToCss, buttonStyleToCss, boxStyleToCss, radiusToCss } from "../../lib/styleUtils";

export default function QuestionPreviewCard({ question, styling, selectedOptionId, onSelectOption, comment, onCommentChange, onSubmit }) {
  return (
    <div className="flex h-full flex-col px-5 pb-5 pt-2">
      <h3 style={textStyleToCss(styling.questionTitle)}>{question.title || "Untitled question"}</h3>
      {question.subtitle && <p style={textStyleToCss(styling.subtitle)}>{question.subtitle}</p>}

      <div className="mt-1 flex-1 overflow-y-auto">
        {question.options.map((opt) => (
          <OptionRow
            key={opt.id}
            option={opt}
            config={styling.optionList}
            selected={selectedOptionId === opt.id}
            onSelect={() => onSelectOption(opt.id)}
          />
        ))}

        {question.additionalComments && (
          <textarea
            value={comment}
            onChange={(e) => onCommentChange(e.target.value)}
            placeholder="Add a comment..."
            rows={2}
            style={{
              ...boxStyleToCss(styling.additionalComment),
              ...radiusToCss(styling.optionList.cornerRadius),
              width: "100%",
              padding: "10px 12px",
              marginTop: 4,
              resize: "none",
              outline: "none",
            }}
          />
        )}
      </div>

      <button
        type="button"
        onClick={onSubmit}
        style={{ ...buttonStyleToCss(styling.ctaButton), display: "flex", alignItems: "center" }}
        className="mx-auto"
      >
        {question.submitButtonText || "Continue"}
      </button>
    </div>
  );
}
