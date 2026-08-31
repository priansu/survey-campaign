import React from "react";
import Section from "../common/Section";
import BoxStyleFields from "./BoxStyleFields";
import { useSurvey } from "../../state/SurveyContext";

export default function AdditionalCommentSection() {
  const { state, set } = useSurvey();
  return (
    <Section number="05" title="Additional comment styling" description="The optional free-text field shown below options.">
      <BoxStyleFields
        value={state.styling.additionalComment}
        onChange={(next) => set(["styling", "additionalComment"], next)}
      />
    </Section>
  );
}
