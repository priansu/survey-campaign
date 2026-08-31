import React from "react";

export default function CrossIcon({ config, onClick }) {
  if (!config.enabled) return null;

  const { margin, size, crossColor, fillColor, strokeColor, styleId, customIconUrl } = config;
  const style = {
    marginTop: margin.top,
    marginBottom: margin.bottom,
    marginLeft: margin.left,
    marginRight: margin.right,
    width: size,
    height: size,
  };

  if (customIconUrl) {
    return (
      <button onClick={onClick} style={style} className="shrink-0">
        <img src={customIconUrl} alt="Close" className="h-full w-full object-contain" />
      </button>
    );
  }

  const wrapClass = {
    "circle-outline": "rounded-full border",
    minimal: "",
    filled: "rounded-full",
    tag: "rounded-md border",
  }[styleId];

  return (
    <button
      onClick={onClick}
      style={{
        ...style,
        backgroundColor: styleId === "filled" ? fillColor : styleId === "minimal" ? "transparent" : fillColor,
        borderColor: strokeColor,
      }}
      className={`flex shrink-0 items-center justify-center ${wrapClass}`}
    >
      <svg viewBox="0 0 12 12" fill="none" style={{ width: size * 0.4, height: size * 0.4 }}>
        <path d="M2 2l8 8M10 2l-8 8" stroke={crossColor} strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </button>
  );
}
