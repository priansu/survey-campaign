import React from "react";
import Section from "../common/Section";
import ButtonStyleFields from "./ButtonStyleFields";
import { useSurvey } from "../../state/SurveyContext";

export default function CtaButtonSection() {
  const { state, set } = useSurvey();
  return (
    <Section number="06" title="Submit button styling" description="The primary call-to-action on every question page.">
      <ButtonStyleFields value={state.styling.ctaButton} onChange={(next) => set(["styling", "ctaButton"], next)} />
    </Section>
  );
}
