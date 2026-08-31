import React from "react";
import IntroductionSection from "./IntroductionSection";
import QuestionsSection from "./QuestionsSection";
import ThankYouSection from "./ThankYouSection";

export default function ContentPanel() {
  return (
    <div className="divide-y divide-line">
      <IntroductionSection />
      <QuestionsSection />
      <ThankYouSection />
    </div>
  );
}
