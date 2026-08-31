export function marginToCss(margin) {
  if (!margin) return {};
  return {
    marginTop: margin.top,
    marginBottom: margin.bottom,
    marginLeft: margin.left,
    marginRight: margin.right,
  };
}

export function radiusToCss(radius) {
  if (!radius) return {};
  return {
    borderTopLeftRadius: radius.tl,
    borderTopRightRadius: radius.tr,
    borderBottomLeftRadius: radius.bl,
    borderBottomRightRadius: radius.br,
  };
}

export function textStyleToCss(t, { withMargin = true } = {}) {
  return {
    color: t.color,
    fontFamily: t.fontFamily,
    fontSize: t.fontSize,
    fontWeight: t.bold ? 700 : t.fontWeight,
    fontStyle: t.italic ? "italic" : "normal",
    textDecoration: t.underline ? "underline" : "none",
    textAlign: t.alignment,
    ...(withMargin ? marginToCss(t.margin) : {}),
  };
}

export function boxStyleToCss(b) {
  return {
    borderColor: b.borderColor,
    color: b.textColor,
    backgroundColor: b.backgroundColor,
    borderWidth: b.borderWidth,
    borderStyle: "solid",
    fontFamily: b.fontFamily,
    fontSize: b.fontSize,
    fontWeight: b.bold ? 700 : b.fontWeight,
    fontStyle: b.italic ? "italic" : "normal",
    textDecoration: b.underline ? "underline" : "none",
    textAlign: b.alignment,
  };
}

export function buttonStyleToCss(btn) {
  return {
    borderColor: btn.borderColor,
    color: btn.textColor,
    backgroundColor: btn.backgroundColor,
    fontFamily: btn.fontFamily,
    fontSize: btn.fontSize,
    fontWeight: btn.bold ? 700 : 500,
    height: btn.height,
    width: btn.fullWidth ? "100%" : btn.width,
    borderWidth: btn.borderWidth,
    borderStyle: "solid",
    textAlign: btn.alignment,
    justifyContent: btn.alignment === "center" ? "center" : btn.alignment === "right" ? "flex-end" : "flex-start",
    ...radiusToCss(btn.cornerRadius),
    ...marginToCss(btn.margin),
  };
}
