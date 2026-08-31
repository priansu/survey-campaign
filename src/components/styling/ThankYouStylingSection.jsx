import React from "react";
import Section from "../common/Section";
import Field from "../common/Field";
import NumberInput from "../common/NumberInput";
import FourSideGrid from "../common/FourSideGrid";
import { Grid2, SubSection } from "../common/SubSection";
import TextStyleFields from "./TextStyleFields";
import ButtonStyleFields from "./ButtonStyleFields";
import { useSurvey } from "../../state/SurveyContext";

export default function ThankYouStylingSection() {
  const { state, set } = useSurvey();
  const ty = state.styling.thankYouPage;
  const base = ["styling", "thankYouPage"];

  return (
    <Section number="08" title="Thank you page styling" description="Customize the closing screen respondents see.">
      <SubSection title="Title">
        <TextStyleFields value={ty.title} onChange={(next) => set([...base, "title"], next)} />
      </SubSection>

      <SubSection title="Subtitle">
        <TextStyleFields value={ty.subtitle} onChange={(next) => set([...base, "subtitle"], next)} />
      </SubSection>

      <SubSection title="Image styling">
        <Grid2>
          <Field label="Width">
            <NumberInput value={ty.image.width} onChange={(v) => set([...base, "image", "width"], v)} min={24} max={300} />
          </Field>
          <Field label="Height">
            <NumberInput value={ty.image.height} onChange={(v) => set([...base, "image", "height"], v)} min={24} max={300} />
          </Field>
        </Grid2>
        <Field label="Margin">
          <FourSideGrid value={ty.image.margin} onChange={(k, v) => set([...base, "image", "margin", k], v)} />
        </Field>
      </SubSection>

      <SubSection title="Thank you button styling">
        <ButtonStyleFields value={ty.button} onChange={(next) => set([...base, "button"], next)} />
      </SubSection>
    </Section>
  );
}
