import React from "react";
import { textStyleToCss, buttonStyleToCss } from "../../lib/styleUtils";

export default function ThankYouPreviewCard({ thankYou, styling }) {
  const { media } = thankYou;

  return (
    <div className="flex h-full flex-col items-center justify-center px-6 text-center">
      {media.dataUrl && media.type !== "lottie" && (
        <img
          src={media.dataUrl}
          alt=""
          style={{
            width: styling.image.width,
            height: styling.image.height,
            marginTop: styling.image.margin.top,
            marginBottom: styling.image.margin.bottom,
            marginLeft: styling.image.margin.left,
            marginRight: styling.image.margin.right,
            objectFit: "contain",
          }}
        />
      )}
      {media.dataUrl && media.type === "lottie" && (
        <div
          style={{
            width: styling.image.width,
            height: styling.image.height,
            marginTop: styling.image.margin.top,
            marginBottom: styling.image.margin.bottom,
          }}
          className="flex items-center justify-center rounded-2xl bg-gold-soft text-[10px] font-semibold text-gold"
        >
          LOTTIE
        </div>
      )}
      {!media.dataUrl && (
        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-pine-soft text-pine">
          <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}

      <h3 style={textStyleToCss(styling.title)}>{thankYou.title || "Thank you!"}</h3>
      {thankYou.subtitle && <p style={textStyleToCss(styling.subtitle)}>{thankYou.subtitle}</p>}

      <button
        type="button"
        style={{ ...buttonStyleToCss(styling.button), display: "flex", alignItems: "center", marginLeft: "auto", marginRight: "auto" }}
      >
        {thankYou.cta.text || "Done"}
      </button>
    </div>
  );
}
