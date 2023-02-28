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
    edit: false,
    editId: '',
  },
  games: [],
  quiz: {
    playing: false,
    game: {},
  },
  players: {},
  randomize: [],
};

export const [
  useQuiz,
  {
    setName,
    setAnswers,
    setNewQuestionName,
    addQuestion,
    deleteQuestion,
    setPreview,
    editMode,
    editQuestion,
    addGame,
    createGame,
    backToGames,
    randomizeArr,
  },
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
  setAnswers: (state, newText) => {
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
  deleteQuestion: (state, id) => {
    return {
      ...state,
      admin: {
        ...state.admin,
        questions: state.admin.questions.filter((item) => item.id !== id),
      },
    };
  },
  editMode: (state, item) => {
    return {
      ...state,
      admin: {
        ...state.admin,
        edit: true,
        editId: item.id,
        newQuestion: item.question,
        answers: {
          ...state.admin.answers,
          correctAnswer: item.correctAnswer,
          option1: item.option1,
          option2: item.option2,
          option3: item.option3,
        },
      },
    };
  },
  editQuestion: (state) => {
    return {
      ...state,
      admin: {
        ...state.admin,
        questions: state.admin.questions.map((item) => {
          return item.id === state.admin.editId
            ? {
                ...item,
                question: state.admin.newQuestion,
                correctAnswer: state.admin.answers.correctAnswer,
                option1: state.admin.answers.option1,
                option2: state.admin.answers.option2,
                option3: state.admin.answers.option3,
              }
            : item;
        }),
        answers: {
          ...state.answers,
          correctAnswer: '',
          option1: '',
          option2: '',
          option3: '',
        },
        edit: false,
        editId: '',
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
  addGame: (state) => {
    return {
      ...state,
      games: [
        ...state.games,
        {
          name: state.admin.quizName,
          questions: [
            state.admin.questions.map((item) => {
              return {
                question: item.question,
                answers: [
                  { text: item.correctAnswer, correct: true },
                  { text: item.option1, correct: false },
                  { text: item.option2, correct: false },
                  { text: item.option3, correct: false },
                ],
                answered: false,
                point: false,
              };
            }),
          ],
          id: uuid(),
        },
      ],
      admin: {
        ...state.admin,
        quizName: '',
        questions: [],
        preview: true,
        edit: false,
        editId: '',
      },
    };
  },
  createGame: (state, payload) => {
    return {
      ...state,
      quiz: {
        ...state.quiz,
        playing: true,
        game: state.games.filter((game) => {
          return game.id === payload.id;
        }),
      },
    };
  },
  backToGames: (state) => {
    return { ...state, quiz: { ...state.quiz, playing: false } };
  },
  randomizeArr: (state) => {
    const arr = [];
    do {
      const nr = Math.floor(Math.random() * 4);
      !arr.includes(nr) && arr.push(nr);
    } while (arr.length !== 4);

    return {
      ...state,
      randomize: arr,
    };
  },
});
