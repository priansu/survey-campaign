import React from "react";

export default function SelectInput({ value, onChange, options = [] }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        h-11
        w-full
        cursor-pointer
        rounded-[10px]
        border
        border-line-strong
        bg-white
        px-3.5
        text-[13px]
        font-medium
        text-ink
        outline-none
        transition-all
        duration-200
        hover:border-ink/20
        focus:border-pine
        focus:ring-4
        focus:ring-pine/10
      "
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}