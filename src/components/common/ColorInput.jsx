import React from "react";

export default function ColorInput({ value, onChange }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-line-strong bg-white px-2 py-1.5 focus-within:border-pine focus-within:ring-2 focus-within:ring-pine-soft">
      <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full ring-1 ring-black/10">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="absolute -left-1 -top-1 h-8 w-8 cursor-pointer border-none bg-transparent p-0"
        />
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full min-w-0 text-[12.5px] uppercase text-ink-soft outline-none"
      />
    </div>
  );
}
