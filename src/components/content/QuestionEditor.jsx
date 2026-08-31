import React, { useState } from "react";
import { useSurvey } from "../../state/SurveyContext";
import Field from "../common/Field";
import TextInput from "../common/TextInput";
import TextArea from "../common/TextArea";
import ToggleSwitch from "../common/ToggleSwitch";
import { GhostButton } from "../common/Button";
import OptionEditor from "./OptionEditor";
import LogicEditor from "./LogicEditor";

const DEFAULT_SUBTITLE =
  "Add a short description to help respondents understand this question.";

export default function QuestionEditor({ question, index, total }) {
  const { dispatch } = useSurvey();

  const [subtitleFocused, setSubtitleFocused] = useState(false);

  const update = (field, value) => {
    dispatch({
      type: "UPDATE_QUESTION_FIELD",
      id: question.id,
      field,
      value,
    });
  };

  const isDefaultSubtitle = question.subtitle === DEFAULT_SUBTITLE;

  const handleSubtitleFocus = () => {
    setSubtitleFocused(true);

    // Remove the placeholder/default text when clicked
    if (isDefaultSubtitle) {
      update("subtitle", "");
    }
  };

  const handleSubtitleBlur = () => {
    setSubtitleFocused(false);

    // Restore default text if the user leaves it empty
    if (!question.subtitle.trim()) {
      update("subtitle", DEFAULT_SUBTITLE);
    }
  };

  return (
    <div className="rounded-2xl border border-line bg-white p-5">
      {/* Question number */}
      <div className="mb-4 flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-[11.5px] font-semibold text-white">
          {index + 1}
        </span>

        <span className="text-[12.5px] font-medium text-muted">
          of {total} question pages
        </span>
      </div>

      <div className="space-y-4">

        {/* Title */}
        <Field label="Title">
          <TextInput
            value={question.title}
            onChange={(v) => update("title", v)}
            placeholder="Question title"
          />
        </Field>

        {/* Subtitle */}
        <Field label="Subtitle">
          <div
            className={`relative transition-opacity duration-300 ${
              subtitleFocused && isDefaultSubtitle
                ? "opacity-0"
                : "opacity-100"
            }`}
          >
            <TextArea
              value={question.subtitle}
              onChange={(v) => update("subtitle", v)}
              onFocus={handleSubtitleFocus}
              onBlur={handleSubtitleBlur}
              placeholder="Question description"
            />
          </div>
        </Field>

        {/* Options */}
        <Field
          label="Options"
          hint="Minimum 2 options required — add as many as you need."
        >
          <div className="space-y-2">
            {question.options.map((opt, i) => (
              <OptionEditor
                key={opt.id}
                questionId={question.id}
                option={opt}
                index={i}
                canDelete={question.options.length > 2}
              />
            ))}
          </div>

          <GhostButton
            onClick={() =>
              dispatch({
                type: "ADD_OPTION",
                questionId: question.id,
              })
            }
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="h-3.5 w-3.5"
            >
              <path
                d="M8 3v10M3 8h10"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>

            Add option
          </GhostButton>
        </Field>

        {/* Additional comments */}
        <div className="flex items-center justify-between rounded-xl border border-line bg-paper/60 px-4 py-3">
          <div>
            <p className="text-[13px] font-medium text-ink">
              Additional comments
            </p>

            <p className="text-[12px] text-muted">
              Show a free-text field below the options in the preview.
            </p>
          </div>

          <ToggleSwitch
            checked={question.additionalComments}
            onChange={(v) => update("additionalComments", v)}
          />
        </div>

        {/* Logic */}
        <LogicEditor question={question} />

        {/* Submit button text */}
        <Field label="Submit button text">
          <TextInput
            value={question.submitButtonText}
            onChange={(v) => update("submitButtonText", v)}
          />
        </Field>

      </div>
    </div>
  );
}

