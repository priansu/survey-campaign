import React, { useRef } from "react";
import Section from "../common/Section";
import Field from "../common/Field";
import ColorInput from "../common/ColorInput";
import NumberInput from "../common/NumberInput";
import ToggleSwitch from "../common/ToggleSwitch";
import FourSideGrid from "../common/FourSideGrid";
import { Grid3, SubSection } from "../common/SubSection";
import { useSurvey } from "../../state/SurveyContext";

const STYLES = [
  { value: "circle-outline", label: "Circle outline" },
  { value: "minimal", label: "Minimal" },
  { value: "filled", label: "Filled" },
  { value: "tag", label: "Tag" },
];

export default function CrossButtonSection() {
  const { state, set } = useSurvey();
  const cb = state.styling.crossButton;
  const base = ["styling", "crossButton"];
  const fileRef = useRef(null);

  const onFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => set([...base, "customIconUrl"], reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <Section
      number="07"
      title="Cross button styling"
      description="The close control shown on question pages."
      right={<ToggleSwitch checked={cb.enabled} onChange={(v) => set([...base, "enabled"], v)} />}
    >
      {cb.enabled && (
        <div className="space-y-5 animate-fade-in">
          <SubSection title="Style">
            <div className="grid grid-cols-4 gap-2">
              {STYLES.map((s) => (
                <button
                  key={s.value}
                  type="button"
                  onClick={() => set([...base, "styleId"], s.value)}
                  className={`rounded-lg border px-2 py-2.5 text-[12px] font-medium transition ${
                    cb.styleId === s.value
                      ? "border-pine bg-pine-soft text-pine-dark"
                      : "border-line-strong bg-white text-ink-soft hover:border-pine/40"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </SubSection>

          <Field label="Upload custom icon" hint="Overrides the predefined style above when set.">
            <div className="flex items-center gap-3">
              {cb.customIconUrl && (
                <img src={cb.customIconUrl} alt="" className="h-8 w-8 rounded object-contain ring-1 ring-line-strong" />
              )}
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="rounded-lg border border-dashed border-line-strong px-3 py-2 text-[12.5px] font-medium text-ink-soft hover:border-pine hover:text-pine"
              >
                {cb.customIconUrl ? "Replace icon" : "Choose icon"}
              </button>
              {cb.customIconUrl && (
                <button
                  type="button"
                  onClick={() => set([...base, "customIconUrl"], "")}
                  className="text-[12px] text-rust"
                >
                  Remove
                </button>
              )}
              <input ref={fileRef} type="file" accept="image/*" onChange={onFile} className="hidden" />
            </div>
          </Field>

          <SubSection title="Colors">
            <Grid3>
              <Field label="Cross">
                <ColorInput value={cb.crossColor} onChange={(v) => set([...base, "crossColor"], v)} />
              </Field>
              <Field label="Fill">
                <ColorInput value={cb.fillColor} onChange={(v) => set([...base, "fillColor"], v)} />
              </Field>
              <Field label="Stroke">
                <ColorInput value={cb.strokeColor} onChange={(v) => set([...base, "strokeColor"], v)} />
              </Field>
            </Grid3>
          </SubSection>

          <Field label="Size">
            <div className="max-w-[160px]">
              <NumberInput value={cb.size} onChange={(v) => set([...base, "size"], v)} min={16} max={64} />
            </div>
          </Field>

          <Field label="Margin">
            <FourSideGrid value={cb.margin} onChange={(k, v) => set([...base, "margin", k], v)} />
          </Field>
        </div>
      )}
    </Section>
  );
}
