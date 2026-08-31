import React, { useRef } from "react";
import Section from "../common/Section";
import Field from "../common/Field";
import TextInput from "../common/TextInput";
import TextArea from "../common/TextArea";
import SelectInput from "../common/SelectInput";
import ToggleSwitch from "../common/ToggleSwitch";
import { Grid2 } from "../common/SubSection";
import { useSurvey } from "../../state/SurveyContext";

const ACCEPT = ".png,.jpg,.jpeg,.gif,.json";

export default function ThankYouSection() {
  const { state, set } = useSurvey();
  const { thankYou } = state.content;
  const fileRef = useRef(null);

  const patchMedia = (patch) => set(["content", "thankYou", "media"], { ...thankYou.media, ...patch });
  const patchCta = (patch) => set(["content", "thankYou", "cta"], { ...thankYou.cta, ...patch });

  const onFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const ext = file.name.split(".").pop().toLowerCase();
    const type = ext === "json" ? "lottie" : ext;
    const reader = new FileReader();
    reader.onload = () => patchMedia({ type, name: file.name, dataUrl: reader.result });
    reader.readAsDataURL(file);
  };

  return (
    <Section
      number="C"
      title="Thank you page"
      description="Shown after the last question is answered — optional."
      right={
        <ToggleSwitch checked={thankYou.enabled} onChange={(v) => set(["content", "thankYou", "enabled"], v)} />
      }
    >
      {thankYou.enabled && (
        <div className="space-y-5 animate-fade-in">
          <Field label="Upload media" hint="Supports PNG, JPG, JPEG, GIF and Lottie (.json) files.">
            <div className="flex items-center gap-3">
              {thankYou.media.dataUrl && thankYou.media.type !== "lottie" && (
                <img src={thankYou.media.dataUrl} alt="" className="h-12 w-12 rounded-lg object-cover ring-1 ring-line-strong" />
              )}
              {thankYou.media.dataUrl && thankYou.media.type === "lottie" && (
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-soft text-[10px] font-semibold text-gold">
                  LOTTIE
                </span>
              )}
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="rounded-lg border border-dashed border-line-strong px-3 py-2 text-[12.5px] font-medium text-ink-soft hover:border-pine hover:text-pine"
              >
                {thankYou.media.name || "Choose file"}
              </button>
              <input ref={fileRef} type="file" accept={ACCEPT} onChange={onFile} className="hidden" />
            </div>
          </Field>

          <Field label="Thank you title">
            <TextInput
              value={thankYou.title}
              onChange={(v) => set(["content", "thankYou", "title"], v)}
              placeholder="Thanks for your time!"
            />
          </Field>

          <Field label="Thank you subtitle">
            <TextArea
              value={thankYou.subtitle}
              onChange={(v) => set(["content", "thankYou", "subtitle"], v)}
              placeholder="Thank you description"
            />
          </Field>

          <Grid2>
            <Field label="CTA button text">
              <TextInput value={thankYou.cta.text} onChange={(text) => patchCta({ text })} />
            </Field>
            <Field label="Redirect">
              <SelectInput
                value={thankYou.cta.redirectType}
                onChange={(redirectType) => patchCta({ redirectType })}
                options={[
                  { value: "none", label: "No redirect" },
                  { value: "url", label: "External URL" },
                ]}
              />
            </Field>
          </Grid2>

          {thankYou.cta.redirectType === "url" && (
            <Field label="Redirect URL">
              <TextInput
                value={thankYou.cta.redirectUrl}
                onChange={(redirectUrl) => patchCta({ redirectUrl })}
                placeholder="https://example.com"
              />
            </Field>
          )}
        </div>
      )}
    </Section>
  );
}
