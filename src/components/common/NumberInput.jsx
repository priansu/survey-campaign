import React from "react";

export default function NumberInput({
  value,
  onChange,
  min = 0,
  max = 999,
  step = 1,
  suffix = "",
}) {
  const currentValue = Number(value) || 0;

  const clamp = (next) => Math.min(max, Math.max(min, next));

  const increase = () => {
    onChange(clamp(currentValue + step));
  };

  const decrease = () => {
    onChange(clamp(currentValue - step));
  };

  const handleChange = (e) => {
    const rawValue = e.target.value;

    if (rawValue === "") return;

    const next = Number(rawValue);

    if (!Number.isNaN(next)) {
      onChange(clamp(next));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      increase();
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      decrease();
    }
  };

  return (
    <div className="flex h-12 w-full overflow-hidden rounded-xl border border-line-strong bg-white shadow-sm transition-all focus-within:border-pine focus-within:ring-4 focus-within:ring-pine/10">
      
      {/* Number + Page Indicator */}
      <div className="flex min-w-0 flex-1 items-center justify-center gap-2">
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-10 bg-transparent text-center text-[16px] font-semibold text-ink outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          aria-label="Number of pages"
        />

        <span className="text-[11px] font-medium text-muted">
          {suffix || "pages"}
        </span>
      </div>

      {/* Arrow Controls */}
      <div className="flex w-9 shrink-0 flex-col border-l border-line">
        
        <button
          type="button"
          onClick={increase}
          disabled={currentValue >= max}
          aria-label="Increase"
          className="flex flex-1 items-center justify-center text-muted transition hover:bg-paper hover:text-pine disabled:cursor-not-allowed disabled:opacity-30"
        >
          <svg
            viewBox="0 0 16 16"
            className="h-3.5 w-3.5"
            fill="none"
          >
            <path
              d="M4 10l4-4 4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="h-px bg-line" />

        <button
          type="button"
          onClick={decrease}
          disabled={currentValue <= min}
          aria-label="Decrease"
          className="flex flex-1 items-center justify-center text-muted transition hover:bg-paper hover:text-rust disabled:cursor-not-allowed disabled:opacity-30"
        >
          <svg
            viewBox="0 0 16 16"
            className="h-3.5 w-3.5"
            fill="none"
          >
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

      </div>
    </div>
  );
}

