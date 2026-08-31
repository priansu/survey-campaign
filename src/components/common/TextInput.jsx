import React from "react";

export default function TextInput({ value, onChange, placeholder, type = "text" }) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="
        h-11
        w-full
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
        placeholder:text-muted
        hover:border-ink/20
        focus:border-pine
        focus:ring-4
        focus:ring-pine/10
      "
    />
  );
}