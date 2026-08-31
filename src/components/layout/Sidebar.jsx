import React from "react";
import { useSurvey } from "../../state/SurveyContext";
import { PrimaryTab } from "../common/Button";

const ContentIcon = (
  <svg viewBox="0 0 20 20" fill="none" className="h-[18px] w-[18px]">
    <path d="M4 4h12M4 9h12M4 14h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const StyleIcon = (
  <svg viewBox="0 0 20 20" fill="none" className="h-[18px] w-[18px]">
    <path d="M10 3l2.2 4.4 4.8.7-3.5 3.4.8 4.8L10 14l-4.3 2.3.8-4.8-3.5-3.4 4.8-.7L10 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

export default function Sidebar() {
  const { state, dispatch } = useSurvey();

  return (
    <aside className="flex w-[220px] shrink-0 flex-col border-r border-line bg-paper px-3 py-5">
      <div className="mb-6 px-2.5">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink text-[13px] font-display italic text-gold">
            S
          </span>
          <span className="font-display text-[16px] font-medium text-ink">Campaign Builder</span>
        </div>
        <p className="mt-1.5 text-[11.5px] leading-snug text-muted">
          Configure content and styling — the preview updates instantly.
        </p>
      </div>

      <nav className="space-y-1">
        <PrimaryTab
          active={state.activeTab === "content"}
          onClick={() => dispatch({ type: "SET_ACTIVE_TAB", tab: "content" })}
          icon={ContentIcon}
          label="Content"
        />
        <PrimaryTab
          active={state.activeTab === "styling"}
          onClick={() => dispatch({ type: "SET_ACTIVE_TAB", tab: "styling" })}
          icon={StyleIcon}
          label="Styling"
        />
      </nav>

      <div className="mt-auto space-y-3 px-2.5 pt-6">
        <div className="rounded-xl border border-line bg-white p-3.5">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-pine">Summary</p>
          <ul className="mt-2 space-y-1 text-[12px] text-ink-soft">
            <li>{state.content.questions.length} question page{state.content.questions.length !== 1 ? "s" : ""}</li>
            <li>Thank you page {state.content.thankYou.enabled ? "on" : "off"}</li>
          </ul>
        </div>
        <button
          type="button"
          onClick={() => confirm("Reset the entire campaign to defaults?") && dispatch({ type: "RESET" })}
          className="w-full rounded-lg border border-line-strong px-3 py-2 text-[12px] font-medium text-muted transition hover:border-rust/40 hover:text-rust"
        >
          Reset campaign
        </button>
      </div>
    </aside>
  );
}
