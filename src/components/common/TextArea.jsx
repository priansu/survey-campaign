import React from "react";

export default function TextArea({
  value,
  onChange,
  placeholder,
  rows = 2,
  onFocus,
  onBlur,
}) {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      rows={rows}
      onChange={(e) => onChange(e.target.value)}
      onFocus={onFocus}
      onBlur={onBlur}
      className="w-full resize-none rounded-lg border border-line-strong bg-white px-3 py-2 text-[13.5px] text-ink outline-none transition-all duration-300 focus:border-pine focus:ring-2 focus:ring-pine-soft"
    />
  );
}

