import React from "react";

export default function TextArea({ value, onChange, placeholder, rows = 2 }) {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      rows={rows}
      onChange={(e) => onChange(e.target.value)}
      className="w-full resize-none rounded-lg border border-line-strong bg-white px-3 py-2 text-[13.5px] text-ink outline-none transition focus:border-pine focus:ring-2 focus:ring-pine-soft"
    />
  );
}
