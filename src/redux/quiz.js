import { createReduxModule } from 'hooks-for-redux';
import { v4 as uuid } from 'uuid';

const initialState = {
  admin: {
    quizName: '',
    newQuestion: '',
    answers: {
      correctAnswer: '',
      option1: '',
      option2: '',
      option3: '',
    },
    questions: [],
    preview: true,
  },
  games: {},
  players: {},
};

export const [
  useQuiz,
  { setName, setAnswers, setNewQuestionName, addQuestion, setPreview },
] = createReduxModule('quiz', initialState, {
  setName: (state, newName) => {
    return { ...state, admin: { ...state.admin, quizName: newName } };
  },
  setNewQuestionName: (state, newQuestionName) => {
    return {
      ...state,
      admin: { ...state.admin, newQuestion: newQuestionName },
    };
  },
  setAnswers: (state, newText, option) => {
    return {
      ...state,
      admin: {
        ...state.admin,
        answers:
          newText.id === 'correctAnswer'
            ? { ...state.admin.answers, correctAnswer: newText.value }
            : newText.id === 'option-1'
            ? { ...state.admin.answers, option1: newText.value }
            : newText.id === 'option-2'
            ? { ...state.admin.answers, option2: newText.value }
            : newText.id === 'option-3' && {
                ...state.admin.answers,
                option3: newText.value,
              },
      },
    };
  },
  addQuestion: (state) => {
    return {
      ...state,
      admin: {
        ...state.admin,
        questions: [
          ...state.admin.questions,
          {
            question: state.admin.newQuestion,
            correctAnswer: state.admin.answers.correctAnswer,
            option1: state.admin.answers.option1,
            option2: state.admin.answers.option2,
            option3: state.admin.answers.option3,
            id: uuid(),
          },
        ],
        answers: {
          ...state.admin.answers,
          correctAnswer: '',
          option1: '',
          option2: '',
          option3: '',
        },
        newQuestion: '',
      },
    };
  },
  setPreview: (state) => {
    return {
      ...state,
      admin: { ...state.admin, preview: state.admin.preview ? false : true },
    };
  },
});
