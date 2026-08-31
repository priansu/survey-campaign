import React from "react";
import { useSurvey } from "../../state/SurveyContext";
import { IconButton } from "../common/Button";

export default function OptionEditor({ questionId, option, index, canDelete }) {
  const { dispatch } = useSurvey();

  return (
    <div className="flex items-center gap-2">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line-strong text-[11.5px] font-medium text-muted">
        {index + 1}
      </span>
      <input
        value={option.text}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_OPTION_TEXT",
            questionId,
            optionId: option.id,
            text: e.target.value,
          })
        }
        placeholder={`Option ${index + 1}`}
        className="w-full rounded-lg border border-line-strong bg-white px-3 py-2 text-[13.5px] outline-none transition focus:border-pine focus:ring-2 focus:ring-pine-soft"
      />
      <IconButton
        danger
        title={canDelete ? "Delete option" : "At least 2 options required"}
        onClick={() =>
          canDelete && dispatch({ type: "REMOVE_OPTION", questionId, optionId: option.id })
        }
      >
        <svg viewBox="0 0 16 16" fill="none" className={`h-4 w-4 ${!canDelete && "opacity-30"}`}>
          <path d="M3 4h10M6.5 4V2.8c0-.4.4-.8.8-.8h1.4c.4 0 .8.4.8.8V4M4.5 4l.6 8.2c0 .5.5.9 1 .9h3.8c.5 0 .9-.4 1-.9l.6-8.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </IconButton>
    </div>
  );
}
