import React from "react";

export default function NumberInput({ value, onChange, min = 0, max = 999, step = 1, suffix = "px" }) {
  const clamp = (next) => Math.min(max, Math.max(min, next));
  const change = (delta) => onChange(clamp(Number(value || 0) + delta));

  return (
    <div className="group flex items-stretch overflow-hidden rounded-xl border border-line-strong bg-white shadow-sm transition-all focus-within:border-pine focus-within:ring-4 focus-within:ring-pine/10 hover:border-ink/20">
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(clamp(Number(e.target.value)))}
        className="w-full min-w-0 bg-transparent px-3.5 py-3 text-[14px] font-semibold text-ink outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
        aria-label="Number"
      />
      {suffix && <span className="flex items-center border-l border-line px-2 text-[11px] font-medium text-muted">{suffix}</span>}
      <div className="flex w-9 shrink-0 flex-col border-l border-line bg-paper/60">
        <button type="button" onClick={() => change(step)} disabled={Number(value) >= max} aria-label="Increase" className="flex flex-1 items-center justify-center text-muted transition hover:bg-pine-soft hover:text-pine disabled:opacity-30">
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5"><path d="M4 10l4-4 4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div className="h-px bg-line" />
        <button type="button" onClick={() => change(-step)} disabled={Number(value) <= min} aria-label="Decrease" className="flex flex-1 items-center justify-center text-muted transition hover:bg-rust/10 hover:text-rust disabled:opacity-30">
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    </div>
  );
}
