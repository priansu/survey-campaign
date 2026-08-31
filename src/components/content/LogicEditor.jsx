import React from "react";
import { useSurvey } from "../../state/SurveyContext";
import ToggleSwitch from "../common/ToggleSwitch";
import SelectInput from "../common/SelectInput";
import { GhostButton, IconButton } from "../common/Button";

export default function LogicEditor({ question }) {
  const { state, dispatch } = useSurvey();
  const { logic } = question;

  const redirectOptions = [
    { value: "next", label: "Go to next question" },
    { value: "submit", label: "Skip to submit" },
    ...state.content.questions
      .filter((q) => q.id !== question.id)
      .map((q) => ({ value: q.id, label: `Jump to: ${q.title || "Question"}` })),
  ];

  return (
    <div className="rounded-xl border border-line bg-paper/60 p-4">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-[11.5px] font-semibold uppercase tracking-wide text-pine">Logic</h4>
          <p className="mt-0.5 text-[12px] text-muted">Redirect respondents based on the option they pick.</p>
        </div>
        <ToggleSwitch
          checked={logic.enabled}
          onChange={(enabled) => dispatch({ type: "SET_LOGIC_ENABLED", questionId: question.id, enabled })}
        />
      </div>

      {logic.enabled && (
        <div className="mt-4 space-y-3 animate-fade-in">
          {logic.conditions.map((cond) => (
            <div key={cond.id} className="flex items-center gap-2 rounded-lg bg-white p-2.5 ring-1 ring-line">
              <span className="shrink-0 text-[12px] text-muted">If</span>
              <SelectInput
                value={cond.optionId}
                onChange={(optionId) =>
                  dispatch({ type: "UPDATE_CONDITION", questionId: question.id, conditionId: cond.id, patch: { optionId } })
                }
                options={question.options.map((o) => ({ value: o.id, label: o.text || "Untitled option" }))}
              />
              <span className="shrink-0 text-[12px] text-muted">then</span>
              <SelectInput
                value={cond.redirectTo}
                onChange={(redirectTo) =>
                  dispatch({ type: "UPDATE_CONDITION", questionId: question.id, conditionId: cond.id, patch: { redirectTo } })
                }
                options={redirectOptions}
              />
              <IconButton
                danger
                title="Remove condition"
                onClick={() => dispatch({ type: "REMOVE_CONDITION", questionId: question.id, conditionId: cond.id })}
              >
                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </IconButton>
            </div>
          ))}

          <GhostButton onClick={() => dispatch({ type: "ADD_CONDITION", questionId: question.id })}>
            <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
              <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            Add condition
          </GhostButton>
        </div>
      )}
    </div>
  );
}
