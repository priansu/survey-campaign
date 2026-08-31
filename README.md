# Survey Campaign Builder

A simplified survey campaign builder built for the AppVersal frontend intern
assignment. Configure a survey from **Content** and **Styling** tabs and watch
a **live mobile preview** update instantly — no save button, no refresh.

## Tech stack

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Plain JavaScript, no UI kit — every control (color picker, toggles,
  alignment group, margin/corner-radius grids, etc.) is hand-built and reused
  across the app
- State: a single `useReducer` + React Context store (`src/state`) — no
  external state library needed for this scope

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # preview the production build locally
```

## Folder structure

```
src/
├── state/                    # Single source of truth
│   ├── defaultState.js       # Initial data shape + factory helpers
│   ├── surveyReducer.js      # All actions (add/remove question, options, styling…)
│   └── SurveyContext.jsx     # Provider + useSurvey() hook
│
├── lib/
│   └── styleUtils.js         # Converts style config objects -> CSS style objects
│
├── components/
│   ├── common/                # Generic, reusable form controls
│   │   ├── ColorInput.jsx / NumberInput.jsx / TextInput.jsx / TextArea.jsx
│   │   ├── ToggleSwitch.jsx / SelectInput.jsx
│   │   ├── AlignmentGroup.jsx / FontStyleGroup.jsx
│   │   ├── FourSideGrid.jsx   # margins AND corner-radius (4-value grid)
│   │   ├── Section.jsx / SubSection.jsx / Button.jsx / Field.jsx
│   │
│   ├── content/                # "Content" tab
│   │   ├── ContentPanel.jsx
│   │   ├── IntroductionSection.jsx    # number of survey pages
│   │   ├── QuestionsSection.jsx / QuestionEditor.jsx
│   │   ├── OptionEditor.jsx           # add / delete / edit an option
│   │   ├── LogicEditor.jsx            # mock conditional logic
│   │   └── ThankYouSection.jsx        # media upload, title, subtitle, CTA
│   │
│   ├── styling/                # "Styling" tab
│   │   ├── StylingPanel.jsx
│   │   ├── TextStyleFields.jsx / BoxStyleFields.jsx / ButtonStyleFields.jsx
│   │   │     (shared field groups reused by every styling section)
│   │   ├── AppearanceSection.jsx
│   │   ├── TitleAndSubtitleSections.jsx
│   │   ├── OptionListSection.jsx
│   │   ├── AdditionalCommentSection.jsx
│   │   ├── CtaButtonSection.jsx
│   │   ├── CrossButtonSection.jsx
│   │   └── ThankYouStylingSection.jsx
│   │
│   └── preview/                # Live mobile preview
│       ├── MobilePreview.jsx   # phone frame, pagination, logic navigation, delay
│       ├── QuestionPreviewCard.jsx / ThankYouPreviewCard.jsx
│       ├── OptionRow.jsx       # radio / checkbox / filled / alternative layouts
│       └── CrossIcon.jsx
│
├── App.jsx                     # Sidebar + active tab + preview layout
└── main.jsx
```

## Design decisions worth calling out (for the reviewer)

- **One state tree, one reducer.** Every field in the spec — from "number of
  survey pages" to "cross button stroke color" — lives in one predictable
  object (`src/state/defaultState.js`), so the live preview simply *reads*
  state; it never needs to be told to refresh.
- **Reusable style field groups.** The spec repeats the same field patterns
  (color + font + size + weight + style + alignment + margin) across
  question titles, subtitles, thank-you title/subtitle, and more. Rather
  than duplicating markup, `TextStyleFields`, `BoxStyleFields` and
  `ButtonStyleFields` are written once and reused, which keeps the ~40
  configurable style groups maintainable.
- **Dynamic question pages.** Changing "Number of survey pages" dispatches
  `SET_PAGE_COUNT`, which grows/shrinks the `questions` array immutably —
  existing question content is preserved when you increase the count back up.
- **Mock conditional logic.** Each question can enable logic and add
  conditions ("if option X is picked, then redirect to..."). The live
  preview actually honors this when you tap Continue inside it, so you
  can test the flow you're building.
- **Live mobile preview** is a real interactive phone mock — you can select
  options, type a comment, and step through pages, and it reflects the
  configured display delay and backdrop, not just static content.

## Deployment

This is a static Vite build, so any static host works:

**Vercel**
```bash
npm i -g vercel
vercel --prod
```

**Netlify**
```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

Either way, the build command is `npm run build` and the output directory is `dist`.

## Deliverables checklist

- [ ] Push this folder to a new GitHub repository
- [ ] Deploy it (Vercel/Netlify/Render/Firebase) and grab the live URL
- [ ] Add the live URL to this README under "Deployment Link" below, and to
      your submission
- [ ] Submit: GitHub repo link, live demo URL, and this README

**Deployment link:** _add after deploying_
