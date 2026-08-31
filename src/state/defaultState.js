// Unique id helper (no external dependency needed for this project)
let idCounter = 0;
export const makeId = (prefix = "id") => `${prefix}_${Date.now().toString(36)}_${idCounter++}`;

export const defaultTextStyle = (overrides = {}) => ({
  color: "#17161c",
  fontFamily: "Inter",
  fontSize: 16,
  fontWeight: 600,
  bold: false,
  italic: false,
  underline: false,
  alignment: "left",
  margin: { top: 0, bottom: 8, left: 0, right: 0 },
  ...overrides,
});

export const defaultBoxStyle = (overrides = {}) => ({
  borderColor: "#d8d5c9",
  textColor: "#17161c",
  backgroundColor: "#ffffff",
  borderWidth: 1,
  fontFamily: "Inter",
  fontSize: 14,
  fontWeight: 500,
  bold: false,
  italic: false,
  underline: false,
  alignment: "left",
  ...overrides,
});

export const defaultButtonStyle = (overrides = {}) => ({
  fullWidth: true,
  borderColor: "#0e6b57",
  textColor: "#ffffff",
  backgroundColor: "#0e6b57",
  fontFamily: "Inter",
  fontSize: 15,
  bold: true,
  italic: false,
  height: 46,
  width: 200,
  borderWidth: 0,
  cornerRadius: { tl: 10, tr: 10, bl: 10, br: 10 },
  alignment: "center",
  margin: { top: 16, bottom: 0, left: 0, right: 0 },
  ...overrides,
});

export const makeQuestion = (n) => ({
  id: makeId("q"),
  title: `Question ${n}`,
  subtitle: "Add a short description to help respondents understand this question.",
  options: [
    { id: makeId("opt"), text: "Option 1" },
    { id: makeId("opt"), text: "Option 2" },
  ],
  additionalComments: false,
  logic: {
    enabled: false,
    conditions: [],
  },
  submitButtonText: "Continue",
});

export const initialState = {
  activeTab: "content", // 'content' | 'styling'
  content: {
    intro: {
      pageCount: 2,
    },
    questions: [makeQuestion(1), makeQuestion(2)],
    thankYou: {
      enabled: true,
      media: { type: "none", name: "", dataUrl: "" },
      title: "Thanks for your time!",
      subtitle: "Your responses have been recorded. We really appreciate the feedback.",
      cta: { text: "Done", redirectType: "none", redirectUrl: "" },
    },
  },
  styling: {
    appearance: {
      backgroundColor: "#ffffff",
      cornerRadius: { tl: 20, tr: 20, bl: 20, br: 20 },
      displayDelay: 0,
      backdropColor: "#0b0b0d",
      backdropOpacity: 55,
    },
    questionTitle: defaultTextStyle({ fontSize: 19, fontWeight: 700 }),
    subtitle: defaultTextStyle({ fontSize: 14, fontWeight: 400, color: "#5c5a54" }),
    optionList: {
      layout: "radio", // radio | checkbox | filled | alternative
      optionHeight: 48,
      bulletSpacing: 10,
      optionSpacing: 10,
      cornerRadius: { tl: 10, tr: 10, bl: 10, br: 10 },
      selected: defaultBoxStyle({
        borderColor: "#0e6b57",
        textColor: "#0a5344",
        backgroundColor: "#e4efec",
        borderWidth: 2,
        fontWeight: 600,
      }),
      unselected: defaultBoxStyle(),
    },
    additionalComment: defaultBoxStyle({ fontSize: 13 }),
    ctaButton: defaultButtonStyle(),
    crossButton: {
      enabled: true,
      styleId: "circle-outline", // circle-outline | minimal | filled | tag
      customIconUrl: "",
      crossColor: "#17161c",
      fillColor: "#ffffff",
      strokeColor: "#d8d5c9",
      size: 32,
      margin: { top: 12, bottom: 0, left: 0, right: 12 },
    },
    thankYouPage: {
      title: defaultTextStyle({ fontSize: 20, fontWeight: 700, alignment: "center" }),
      subtitle: defaultTextStyle({
        fontSize: 14,
        fontWeight: 400,
        color: "#5c5a54",
        alignment: "center",
      }),
      image: { width: 96, height: 96, margin: { top: 8, bottom: 12, left: 0, right: 0 } },
      button: defaultButtonStyle(),
    },
  },
};
