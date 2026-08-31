import React from "react";
import Field from "../common/Field";
import ColorInput from "../common/ColorInput";
import SelectInput from "../common/SelectInput";
import NumberInput from "../common/NumberInput";
import ToggleSwitch from "../common/ToggleSwitch";
import AlignmentGroup from "../common/AlignmentGroup";
import FourSideGrid from "../common/FourSideGrid";
import { Grid2, Grid3 } from "../common/SubSection";
import { FONT_OPTIONS } from "./TextStyleFields";

export default function ButtonStyleFields({ value, onChange }) {
  const patch = (p) => onChange({ ...value, ...p });

  return (
    <div className="space-y-4">
      <ToggleSwitch checked={value.fullWidth} onChange={(fullWidth) => patch({ fullWidth })} label="Occupy full width" />

      <Grid3>
        <Field label="Border">
          <ColorInput value={value.borderColor} onChange={(borderColor) => patch({ borderColor })} />
        </Field>
        <Field label="Text">
          <ColorInput value={value.textColor} onChange={(textColor) => patch({ textColor })} />
        </Field>
        <Field label="Background">
          <ColorInput value={value.backgroundColor} onChange={(backgroundColor) => patch({ backgroundColor })} />
        </Field>
      </Grid3>

      <Grid2>
        <Field label="Font family">
          <SelectInput value={value.fontFamily} onChange={(fontFamily) => patch({ fontFamily })} options={FONT_OPTIONS} />
        </Field>
        <Field label="Font size">
          <NumberInput value={value.fontSize} onChange={(fontSize) => patch({ fontSize })} min={10} max={28} />
        </Field>
      </Grid2>

      <Grid2>
        <Field label="Height">
          <NumberInput value={value.height} onChange={(height) => patch({ height })} min={28} max={80} />
        </Field>
        {!value.fullWidth && (
          <Field label="Width">
            <NumberInput value={value.width} onChange={(width) => patch({ width })} min={80} max={400} />
          </Field>
        )}
      </Grid2>

      <Grid2>
        <Field label="Border width">
          <NumberInput value={value.borderWidth} onChange={(borderWidth) => patch({ borderWidth })} max={8} />
        </Field>
        <Field label="Alignment">
          <AlignmentGroup value={value.alignment} onChange={(alignment) => patch({ alignment })} />
        </Field>
      </Grid2>

      <Field label="Corner radius">
        <FourSideGrid
          mode="radius"
          value={value.cornerRadius}
          onChange={(k, v) => patch({ cornerRadius: { ...value.cornerRadius, [k]: v } })}
        />
      </Field>

      <Field label="Margin">
        <FourSideGrid value={value.margin} onChange={(k, v) => patch({ margin: { ...value.margin, [k]: v } })} />
      </Field>
    </div>
  );
}
