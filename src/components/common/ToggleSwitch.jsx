import React from "react";

export default function ToggleSwitch({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex items-center gap-2.5"
    >
      <span
        className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
          checked ? "bg-pine" : "bg-line-strong"
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </span>
      {label && <span className="text-[13px] font-medium text-ink-soft">{label}</span>}
    </button>
  );
}
