import React from "react";
import AppearanceSection from "./AppearanceSection";
import { QuestionTitleSection, SubtitleSection } from "./TitleAndSubtitleSections";
import OptionListSection from "./OptionListSection";
import AdditionalCommentSection from "./AdditionalCommentSection";
import CtaButtonSection from "./CtaButtonSection";
import CrossButtonSection from "./CrossButtonSection";
import ThankYouStylingSection from "./ThankYouStylingSection";

export default function StylingPanel() {
  return (
    <div className="divide-y divide-line">
      <AppearanceSection />
      <QuestionTitleSection />
      <SubtitleSection />
      <OptionListSection />
      <AdditionalCommentSection />
      <CtaButtonSection />
      <CrossButtonSection />
      <ThankYouStylingSection />
    </div>
  );
}
