import React from "react";

export default function SelectInput({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border border-line-strong bg-white px-3 py-2 text-[13.5px] text-ink outline-none transition focus:border-pine focus:ring-2 focus:ring-pine-soft"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
