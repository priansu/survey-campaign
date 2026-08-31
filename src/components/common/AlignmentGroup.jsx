import React from "react";

const OPTIONS = [
  {
    value: "left",
    label: "Left",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
        <path d="M2 4h12M2 8h8M2 12h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: "center",
    label: "Center",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
        <path d="M2 4h12M4 8h8M3 12h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    value: "right",
    label: "Right",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
        <path d="M2 4h12M6 8h8M4 12h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function AlignmentGroup({ value, onChange }) {
  return (
    <div className="inline-flex rounded-lg border border-line-strong bg-white p-1">
      {OPTIONS.map((opt) => (
        <button
          key={opt.value}
          type="button"
          title={opt.label}
          onClick={() => onChange(opt.value)}
          className={`rounded-md px-2.5 py-1.5 transition ${
            value === opt.value ? "bg-pine text-white" : "text-ink-soft hover:bg-paper"
          }`}
        >
          {opt.icon}
        </button>
      ))}
    </div>
  );
}
