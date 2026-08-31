import React from "react";
import Field from "../common/Field";
import ColorInput from "../common/ColorInput";
import SelectInput from "../common/SelectInput";
import NumberInput from "../common/NumberInput";
import FontStyleGroup from "../common/FontStyleGroup";
import AlignmentGroup from "../common/AlignmentGroup";
import FourSideGrid from "../common/FourSideGrid";
import { Grid2 } from "../common/SubSection";

export const FONT_OPTIONS = [
  { value: "Inter", label: "Inter" },
  { value: "Fraunces", label: "Fraunces" },
  { value: "Georgia", label: "Georgia" },
  { value: "Arial", label: "Arial" },
  { value: "Courier New", label: "Courier New" },
];

const WEIGHT_OPTIONS = [
  { value: 400, label: "Regular" },
  { value: 500, label: "Medium" },
  { value: 600, label: "Semibold" },
  { value: 700, label: "Bold" },
];

// value shape: { color, fontFamily, fontSize, fontWeight, bold, italic, underline, alignment, margin }
export default function TextStyleFields({ value, onChange, includeMargin = true }) {
  const patch = (p) => onChange({ ...value, ...p });

  return (
    <div className="space-y-4">
      <Grid2>
        <Field label="Color">
          <ColorInput value={value.color} onChange={(color) => patch({ color })} />
        </Field>
        <Field label="Font family">
          <SelectInput
            value={value.fontFamily}
            onChange={(fontFamily) => patch({ fontFamily })}
            options={FONT_OPTIONS}
          />
        </Field>
      </Grid2>

      <Grid2>
        <Field label="Font size">
          <NumberInput value={value.fontSize} onChange={(fontSize) => patch({ fontSize })} min={8} max={72} />
        </Field>
        <Field label="Font weight">
          <SelectInput
            value={String(value.fontWeight)}
            onChange={(w) => patch({ fontWeight: Number(w) })}
            options={WEIGHT_OPTIONS.map((o) => ({ ...o, value: String(o.value) }))}
          />
        </Field>
      </Grid2>

      <Grid2>
        <Field label="Font style">
          <FontStyleGroup
            value={value}
            onChange={(key, next) => patch({ [key]: next })}
          />
        </Field>
        <Field label="Alignment">
          <AlignmentGroup value={value.alignment} onChange={(alignment) => patch({ alignment })} />
        </Field>
      </Grid2>

      {includeMargin && (
        <Field label="Margin">
          <FourSideGrid value={value.margin} onChange={(k, v) => patch({ margin: { ...value.margin, [k]: v } })} />
        </Field>
      )}
    </div>
  );
}
