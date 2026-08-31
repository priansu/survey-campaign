import React from "react";

export default function TextInput({ value, onChange, placeholder, className = "" }) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full rounded-lg border border-line-strong bg-white px-3 py-2 text-[13.5px] text-ink outline-none transition focus:border-pine focus:ring-2 focus:ring-pine-soft ${className}`}
    />
  );
}
