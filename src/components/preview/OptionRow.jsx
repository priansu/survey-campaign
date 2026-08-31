import React from "react";
import { boxStyleToCss, radiusToCss } from "../../lib/styleUtils";

export default function OptionRow({ option, config, selected, onSelect }) {
  const box = selected ? config.selected : config.unselected;
  const css = {
    ...boxStyleToCss(box),
    ...radiusToCss(config.cornerRadius),
    minHeight: config.optionHeight,
    marginBottom: config.optionSpacing,
    display: "flex",
    alignItems: "center",
    gap: config.bulletSpacing,
    padding: "0 14px",
    cursor: "pointer",
    width: "100%",
  };

  const bulletBase = "flex h-4 w-4 shrink-0 items-center justify-center border";
  const bulletStyle = { borderColor: box.borderColor };

  return (
    <button type="button" onClick={onSelect} style={css} className="transition">
      {config.layout === "radio" && (
        <span className={`${bulletBase} rounded-full`} style={bulletStyle}>
          {selected && <span className="h-2 w-2 rounded-full" style={{ backgroundColor: box.textColor }} />}
        </span>
      )}
      {config.layout === "checkbox" && (
        <span className={`${bulletBase} rounded-[4px]`} style={bulletStyle}>
          {selected && (
            <svg viewBox="0 0 12 12" className="h-2.5 w-2.5">
              <path d="M2 6l3 3 5-6" stroke={box.textColor} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
      )}
      {config.layout === "filled" && selected && (
        <svg viewBox="0 0 12 12" className="h-3.5 w-3.5 shrink-0">
          <circle cx="6" cy="6" r="5" fill={box.textColor} />
        </svg>
      )}
      {config.layout === "alternative" && (
        <span
          className="h-2 w-2 shrink-0 rounded-full"
          style={{ backgroundColor: selected ? box.textColor : "transparent", border: `1.5px solid ${box.borderColor}` }}
        />
      )}
      <span style={{ textAlign: box.alignment, flex: 1 }} className="truncate">
        {option.text || "Untitled option"}
      </span>
    </button>
  );
}
