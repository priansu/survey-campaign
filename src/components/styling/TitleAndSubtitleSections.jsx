import React from "react";
import Section from "../common/Section";
import TextStyleFields from "./TextStyleFields";
import { useSurvey } from "../../state/SurveyContext";

export function QuestionTitleSection() {
  const { state, set } = useSurvey();
  return (
    <Section number="02" title="Question title styling" description="Applies to every question's title text.">
      <TextStyleFields
        value={state.styling.questionTitle}
        onChange={(next) => set(["styling", "questionTitle"], next)}
      />
    </Section>
  );
}

export function SubtitleSection() {
  const { state, set } = useSurvey();
  return (
    <Section number="03" title="Subtitle styling" description="Applies to every question's description text.">
      <TextStyleFields
        value={state.styling.subtitle}
        onChange={(next) => set(["styling", "subtitle"], next)}
      />
    </Section>
  );
}
