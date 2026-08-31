import React, { useState } from "react";

export default function Section({ number, title, description, defaultOpen = true, right, children }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="border-b border-line last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start gap-3 px-6 py-5 text-left"
      >
        {number && (
          <span className="mt-0.5 font-display text-[13px] italic text-muted">{number}</span>
        )}
        <span className="flex-1">
          <span className="block font-display text-[18px] font-medium leading-none text-ink">
            {title}
          </span>
          {description && <span className="mt-1.5 block text-[12.5px] text-muted">{description}</span>}
        </span>
        {right}
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className={`mt-1 h-3.5 w-3.5 shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && <div className="animate-fade-in space-y-5 px-6 pb-6">{children}</div>}
    </section>
  );
}
