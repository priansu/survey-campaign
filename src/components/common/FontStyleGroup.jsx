import React from "react";

const KEYS = [
  { key: "bold", label: "B", className: "font-bold" },
  { key: "italic", label: "I", className: "italic" },
  { key: "underline", label: "U", className: "underline" },
];

// value: { bold, italic, underline }, onChange(key, nextBool)
export default function FontStyleGroup({ value, onChange }) {
  return (
    <div className="inline-flex rounded-lg border border-line-strong bg-white p-1">
      {KEYS.map((k) => (
        <button
          key={k.key}
          type="button"
          title={k.key}
          onClick={() => onChange(k.key, !value[k.key])}
          className={`w-8 rounded-md py-1.5 text-[13px] transition ${k.className} ${
            value[k.key] ? "bg-pine text-white" : "text-ink-soft hover:bg-paper"
          }`}
        >
          {k.label}
        </button>
      ))}
    </div>
  );
}
