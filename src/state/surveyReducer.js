import { initialState, makeQuestion, makeId } from "./defaultState";

// Immutably set a value at a deep path, e.g. ["styling","ctaButton","fontSize"]
function setPath(state, path, value) {
  if (path.length === 0) return value;
  const [head, ...rest] = path;
  const isArrayIndex = typeof head === "number";
  const container = isArrayIndex ? [...state] : { ...state };
  container[head] = setPath(state?.[head] ?? (isArrayIndex ? {} : {}), rest, value);
  return container;
}

function updateQuestionAt(questions, id, updater) {
  return questions.map((q) => (q.id === id ? updater(q) : q));
}

export function surveyReducer(state, action) {
  switch (action.type) {
    case "SET_ACTIVE_TAB":
      return { ...state, activeTab: action.tab };

    case "SET_PATH":
      return setPath(state, action.path, action.value);

    case "SET_PAGE_COUNT": {
      const count = Math.max(1, Math.min(30, action.count));
      const questions = [...state.content.questions];
      if (count > questions.length) {
        while (questions.length < count) {
          questions.push(makeQuestion(questions.length + 1));
        }
      } else if (count < questions.length) {
        questions.length = count;
      }
      return {
        ...state,
        content: {
          ...state.content,
          intro: { ...state.content.intro, pageCount: count },
          questions,
        },
      };
    }

    case "UPDATE_QUESTION_FIELD": {
      const { id, field, value } = action;
      return {
        ...state,
        content: {
          ...state.content,
          questions: updateQuestionAt(state.content.questions, id, (q) => ({
            ...q,
            [field]: value,
          })),
        },
      };
    }

    case "ADD_OPTION": {
      return {
        ...state,
        content: {
          ...state.content,
          questions: updateQuestionAt(state.content.questions, action.questionId, (q) => ({
            ...q,
            options: [...q.options, { id: makeId("opt"), text: `Option ${q.options.length + 1}` }],
          })),
        },
      };
    }

    case "REMOVE_OPTION": {
      return {
        ...state,
        content: {
          ...state.content,
          questions: updateQuestionAt(state.content.questions, action.questionId, (q) => ({
            ...q,
            options: q.options.length > 2 ? q.options.filter((o) => o.id !== action.optionId) : q.options,
          })),
        },
      };
    }

    case "UPDATE_OPTION_TEXT": {
      return {
        ...state,
        content: {
          ...state.content,
          questions: updateQuestionAt(state.content.questions, action.questionId, (q) => ({
            ...q,
            options: q.options.map((o) =>
              o.id === action.optionId ? { ...o, text: action.text } : o
            ),
          })),
        },
      };
    }

    case "SET_LOGIC_ENABLED": {
      return {
        ...state,
        content: {
          ...state.content,
          questions: updateQuestionAt(state.content.questions, action.questionId, (q) => ({
            ...q,
            logic: { ...q.logic, enabled: action.enabled },
          })),
        },
      };
    }

    case "ADD_CONDITION": {
      return {
        ...state,
        content: {
          ...state.content,
          questions: updateQuestionAt(state.content.questions, action.questionId, (q) => ({
            ...q,
            logic: {
              ...q.logic,
              conditions: [
                ...q.logic.conditions,
                { id: makeId("cond"), optionId: q.options[0]?.id ?? "", redirectTo: "next" },
              ],
            },
          })),
        },
      };
    }

    case "UPDATE_CONDITION": {
      return {
        ...state,
        content: {
          ...state.content,
          questions: updateQuestionAt(state.content.questions, action.questionId, (q) => ({
            ...q,
            logic: {
              ...q.logic,
              conditions: q.logic.conditions.map((c) =>
                c.id === action.conditionId ? { ...c, ...action.patch } : c
              ),
            },
          })),
        },
      };
    }

    case "REMOVE_CONDITION": {
      return {
        ...state,
        content: {
          ...state.content,
          questions: updateQuestionAt(state.content.questions, action.questionId, (q) => ({
            ...q,
            logic: {
              ...q.logic,
              conditions: q.logic.conditions.filter((c) => c.id !== action.conditionId),
            },
          })),
        },
      };
    }

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export { initialState };
