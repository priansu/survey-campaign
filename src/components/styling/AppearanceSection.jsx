import React from "react";
import Section from "../common/Section";
import Field from "../common/Field";
import ColorInput from "../common/ColorInput";
import NumberInput from "../common/NumberInput";
import FourSideGrid from "../common/FourSideGrid";
import { Grid2, SubSection } from "../common/SubSection";
import { useSurvey } from "../../state/SurveyContext";

export default function AppearanceSection() {
  const { state, set } = useSurvey();
  const a = state.styling.appearance;
  const base = ["styling", "appearance"];

  return (
    <Section number="01" title="Appearance" description="The card, backdrop and reveal behaviour of the survey widget.">
      <SubSection title="Colors">
        <Field label="Background color">
          <ColorInput value={a.backgroundColor} onChange={(v) => set([...base, "backgroundColor"], v)} />
        </Field>
      </SubSection>

      <SubSection title="Corner radius">
        <FourSideGrid
          mode="radius"
          value={a.cornerRadius}
          onChange={(k, v) => set([...base, "cornerRadius", k], v)}
        />
      </SubSection>

      <SubSection title="Display">
        <Field label="Delay before showing" hint="Seconds before the widget appears to the respondent.">
          <div className="max-w-[160px]">
            <NumberInput value={a.displayDelay} onChange={(v) => set([...base, "displayDelay"], v)} suffix="sec" />
          </div>
        </Field>
      </SubSection>

      <SubSection title="Backdrop">
        <Grid2>
          <Field label="Backdrop color">
            <ColorInput value={a.backdropColor} onChange={(v) => set([...base, "backdropColor"], v)} />
          </Field>
          <Field label="Backdrop opacity">
            <NumberInput value={a.backdropOpacity} onChange={(v) => set([...base, "backdropOpacity"], v)} min={0} max={100} suffix="%" />
          </Field>
        </Grid2>
      </SubSection>
    </Section>
  );
}
