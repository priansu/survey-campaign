import React from "react";
import Field from "../common/Field";
import ColorInput from "../common/ColorInput";
import SelectInput from "../common/SelectInput";
import NumberInput from "../common/NumberInput";
import FontStyleGroup from "../common/FontStyleGroup";
import AlignmentGroup from "../common/AlignmentGroup";
import { Grid2, Grid3 } from "../common/SubSection";
import { FONT_OPTIONS } from "./TextStyleFields";

// value shape: { borderColor, textColor, backgroundColor, borderWidth, fontFamily, fontSize, fontWeight, bold, italic, underline, alignment }
export default function BoxStyleFields({ value, onChange }) {
  const patch = (p) => onChange({ ...value, ...p });

  return (
    <div className="space-y-4">
      <Grid3>
        <Field label="Border color">
          <ColorInput value={value.borderColor} onChange={(borderColor) => patch({ borderColor })} />
        </Field>
        <Field label="Text color">
          <ColorInput value={value.textColor} onChange={(textColor) => patch({ textColor })} />
        </Field>
        <Field label="Background">
          <ColorInput value={value.backgroundColor} onChange={(backgroundColor) => patch({ backgroundColor })} />
        </Field>
      </Grid3>

      <Grid2>
        <Field label="Border width">
          <NumberInput value={value.borderWidth} onChange={(borderWidth) => patch({ borderWidth })} max={12} />
        </Field>
        <Field label="Font family">
          <SelectInput value={value.fontFamily} onChange={(fontFamily) => patch({ fontFamily })} options={FONT_OPTIONS} />
        </Field>
      </Grid2>

      <Grid2>
        <Field label="Font size">
          <NumberInput value={value.fontSize} onChange={(fontSize) => patch({ fontSize })} min={8} max={48} />
        </Field>
        <Field label="Font style">
          <FontStyleGroup value={value} onChange={(key, next) => patch({ [key]: next })} />
        </Field>
      </Grid2>

      <Field label="Alignment">
        <AlignmentGroup value={value.alignment} onChange={(alignment) => patch({ alignment })} />
      </Field>
    </div>
  );
}
