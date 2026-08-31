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
        className={`relative flex h-6 w-11 shrink-0 items-center rounded-full p-0.5 transition-colors duration-200 ${
          checked ? "bg-pine" : "bg-line-strong"
        }`}
      >
        <span
          className={`block h-5 w-5 shrink-0 rounded-full bg-white shadow-sm transition-transform duration-200 ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </span>

      {label && (
        <span className="text-[13px] font-medium text-ink-soft">
          {label}
        </span>
      )}
    </button>
  );
}