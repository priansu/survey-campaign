import React from "react";

export default function TextArea({
  value,
  onChange,
  placeholder,
  rows = 3,
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
      className="
        min-h-[88px]
        w-full
        resize-none
        rounded-[10px]
        border
        border-line-strong
        bg-white
        px-3.5
        py-3
        text-[13px]
        font-medium
        leading-relaxed
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