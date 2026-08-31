import React from "react";

export default function NumberInput({
  value,
  onChange,
  min = 0,
  max = 999,
  step = 1,
  suffix = "px",
}) {
  const numericValue = Number(value);

  const clamp = (next) => {
    if (Number.isNaN(next)) return min;
    return Math.min(max, Math.max(min, next));
  };

  const change = (delta) => {
    onChange(clamp(numericValue + delta));
  };

  return (
    <div className="flex h-11 w-full overflow-hidden rounded-[10px] border border-line-strong bg-white shadow-sm transition-all duration-200 hover:border-ink/20 focus-within:border-pine focus-within:ring-4 focus-within:ring-pine/10">
      {/* Number field */}
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => {
          const raw = e.target.value;

          // Allow the field to be edited naturally
          if (raw === "") {
            onChange("");
            return;
          }

          onChange(clamp(Number(raw)));
        }}
        className="
          min-w-0
          flex-1
          bg-transparent
          px-3
          text-[13px]
          font-semibold
          text-ink
          outline-none
          [appearance:textfield]
          [&::-webkit-inner-spin-button]:appearance-none
          [&::-webkit-outer-spin-button]:appearance-none
        "
        aria-label="Number"
      />

      {/* Suffix */}
      {suffix && (
        <span className="flex shrink-0 items-center border-l border-line px-2.5 text-[11px] font-medium text-muted">
          {suffix}
        </span>
      )}

      {/* Up / Down controls */}
      <div className="flex w-8 shrink-0 flex-col border-l border-line bg-paper/50">
        <button
          type="button"
          onClick={() => change(step)}
          disabled={numericValue >= max}
          aria-label="Increase"
          className="
            flex
            min-h-0
            flex-1
            items-center
            justify-center
            text-muted
            transition-colors
            hover:bg-pine-soft
            hover:text-pine
            disabled:cursor-not-allowed
            disabled:opacity-30
          "
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className="h-3 w-3 shrink-0"
            aria-hidden="true"
          >
            <path
              d="M4 10l4-4 4 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="h-px shrink-0 bg-line" />

        <button
          type="button"
          onClick={() => change(-step)}
          disabled={numericValue <= min}
          aria-label="Decrease"
          className="
            flex
            min-h-0
            flex-1
            items-center
            justify-center
            text-muted
            transition-colors
            hover:bg-rust/10
            hover:text-rust
            disabled:cursor-not-allowed
            disabled:opacity-30
          "
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className="h-3 w-3 shrink-0"
            aria-hidden="true"
          >
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}