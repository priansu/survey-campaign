import React from "react";
import NumberInput from "./NumberInput";

const SIDES = [
  { key: "top", label: "Top" },
  { key: "right", label: "Right" },
  { key: "bottom", label: "Bottom" },
  { key: "left", label: "Left" },
];

// Generic 4-value control used for both margins (top/right/bottom/left)
// and corner radius (pass keys={tl,tr,br,bl} + labels via `mode="radius"`)
export default function FourSideGrid({ value, onChange, mode = "margin" }) {
  const fields =
    mode === "radius"
      ? [
          { key: "tl", label: "Top left" },
          { key: "tr", label: "Top right" },
          { key: "br", label: "Bottom right" },
          { key: "bl", label: "Bottom left" },
        ]
      : SIDES;

  return (
    <div className="grid grid-cols-2 gap-2">
      {fields.map((f) => (
        <div key={f.key} className="flex items-center gap-2">
          <span className="w-[68px] shrink-0 text-[11.5px] text-muted">{f.label}</span>
          <NumberInput value={value[f.key]} onChange={(v) => onChange(f.key, v)} />
        </div>
      ))}
    </div>
  );
}
