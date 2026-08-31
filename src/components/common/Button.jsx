import React from "react";

export function IconButton({ onClick, title, children, danger = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`flex h-8 w-8 items-center justify-center rounded-lg border transition ${
        danger
          ? "border-transparent text-rust hover:border-rust/30 hover:bg-rust/5"
          : "border-transparent text-ink-soft hover:border-line-strong hover:bg-white"
      }`}
    >
      {children}
    </button>
  );
}

export function GhostButton({ onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-line-strong px-3 py-2 text-[13px] font-medium text-ink-soft transition hover:border-pine hover:text-pine"
    >
      {children}
    </button>
  );
}

export function PrimaryTab({ active, onClick, icon, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-left text-[13.5px] font-medium transition ${
        active ? "bg-ink text-white" : "text-ink-soft hover:bg-white"
      }`}
    >
      <span className={active ? "text-gold" : "text-muted"}>{icon}</span>
      {label}
    </button>
  );
}
