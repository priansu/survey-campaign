import React, { useState } from "react";

export default function Section({
  number,
  title,
  description,
  defaultOpen = true,
  right,
  children,
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="border-b border-line last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start gap-3 px-6 py-5 text-left"
      >
        {number && (
          <span className="mt-0.5 flex h-6 min-w-6 shrink-0 items-center justify-center font-display text-[13px] italic leading-none text-muted">
            {number}
          </span>
        )}

        <span className="min-w-0 flex-1">
          <span className="block font-display text-[18px] font-medium leading-tight text-ink">
            {title}
          </span>

          {description && (
            <span className="mt-1.5 block text-[12.5px] leading-relaxed text-muted">
              {description}
            </span>
          )}
        </span>

        {right}

        {/* Section expand/collapse arrow */}
        <span
          className="
            mt-0.5
            flex
            h-7
            w-7
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border
            border-line
            bg-white
            text-muted
            transition-all
            duration-200
          "
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          >
            <path
              d="M3 6l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {open && (
        <div className="animate-fade-in space-y-5 px-6 pb-6">
          {children}
        </div>
      )}
    </section>
  );
}

