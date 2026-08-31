import React from "react";
import Section from "../common/Section";
import { useSurvey } from "../../state/SurveyContext";
import QuestionEditor from "./QuestionEditor";

export default function QuestionsSection() {
  const { state } = useSurvey();
  const { questions } = state.content;

  return (
    <Section
      number="B"
      title="Question pages"
      description="One editor per survey page — generated automatically from the introduction."
    >
      <div className="space-y-4">
        {questions.map((q, i) => (
          <QuestionEditor key={q.id} question={q} index={i} total={questions.length} />
        ))}
      </div>
    </Section>
  );
}
