import React from "react";
import Section from "../common/Section";
import Field from "../common/Field";
import NumberInput from "../common/NumberInput";
import FourSideGrid from "../common/FourSideGrid";
import { Grid2, SubSection } from "../common/SubSection";
import BoxStyleFields from "./BoxStyleFields";
import { useSurvey } from "../../state/SurveyContext";

const LAYOUTS = [
  { value: "radio", label: "Radio" },
  { value: "checkbox", label: "Checkbox" },
  { value: "filled", label: "Filled" },
  { value: "alternative", label: "Alternative" },
];

export default function OptionListSection() {
  const { state, set } = useSurvey();
  const ol = state.styling.optionList;
  const base = ["styling", "optionList"];

  return (
    <Section number="04" title="Option list styling" description="How each answer choice looks, in every state.">
      <SubSection title="Option layout">
        <div className="grid grid-cols-4 gap-2">
          {LAYOUTS.map((l) => (
            <button
              key={l.value}
              type="button"
              onClick={() => set([...base, "layout"], l.value)}
              className={`rounded-lg border px-2 py-2.5 text-[12.5px] font-medium transition ${
                ol.layout === l.value
                  ? "border-pine bg-pine-soft text-pine-dark"
                  : "border-line-strong bg-white text-ink-soft hover:border-pine/40"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </SubSection>

      <SubSection title="Dimensions">
        <Field label="Option height">
          <div className="max-w-[160px]">
            <NumberInput value={ol.optionHeight} onChange={(v) => set([...base, "optionHeight"], v)} min={32} max={120} />
          </div>
        </Field>
      </SubSection>

      <SubSection title="Spacing">
        <Grid2>
          <Field label="Bullet spacing">
            <NumberInput value={ol.bulletSpacing} onChange={(v) => set([...base, "bulletSpacing"], v)} />
          </Field>
          <Field label="Option spacing">
            <NumberInput value={ol.optionSpacing} onChange={(v) => set([...base, "optionSpacing"], v)} />
          </Field>
        </Grid2>
      </SubSection>

      <SubSection title="Corner radius (all four corners)">
        <FourSideGrid mode="radius" value={ol.cornerRadius} onChange={(k, v) => set([...base, "cornerRadius", k], v)} />
      </SubSection>

      <SubSection title="Selected option styling">
        <BoxStyleFields value={ol.selected} onChange={(next) => set([...base, "selected"], next)} />
      </SubSection>

      <SubSection title="Unselected option styling">
        <BoxStyleFields value={ol.unselected} onChange={(next) => set([...base, "unselected"], next)} />
      </SubSection>
    </Section>
  );
}
