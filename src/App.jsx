import React from "react";
import { SurveyProvider, useSurvey } from "./state/SurveyContext";
import Sidebar from "./components/layout/Sidebar";
import ContentPanel from "./components/content/ContentPanel";
import StylingPanel from "./components/styling/StylingPanel";
import MobilePreview from "./components/preview/MobilePreview";

function Workspace() {
  const { state } = useSurvey();

  return (
    <div className="flex h-screen w-full overflow-hidden bg-paper">
      <Sidebar />

      <main className="flex min-w-0 flex-1 flex-col overflow-y-auto bg-white">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-white/95 px-6 py-4 backdrop-blur">
          <div>
            <h1 className="font-display text-[20px] font-medium text-ink">
              {state.activeTab === "content" ? "Content" : "Styling"}
            </h1>
            <p className="text-[12.5px] text-muted">
              {state.activeTab === "content"
                ? "Build out the survey structure — intro, questions, and the thank you screen."
                : "Fine-tune colors, type and layout across every element."}
            </p>
          </div>
        </header>
        {state.activeTab === "content" ? <ContentPanel /> : <StylingPanel />}
      </main>

      <section className="hidden w-[420px] shrink-0 border-l border-line bg-ink/[0.02] lg:block">
        <MobilePreview />
      </section>
    </div>
  );
}

export default function App() {
  return (
    <SurveyProvider>
      <Workspace />
    </SurveyProvider>
  );
}
