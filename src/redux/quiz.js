import { createReduxModule } from 'hooks-for-redux';
import { v4 as uuid } from 'uuid';

let initialState;

if (localStorage.getItem('initialState') === null) {
  initialState = {
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
      points: 0,
      currQuestion: 0,
      currPlayer: 1,
      activePlayers: 1,
      players: [
        { id: 1, name: '', score: 0 },
        { id: 2, name: '', score: 0 },
        { id: 3, name: '', score: 0 },
        { id: 4, name: '', score: 0 },
      ],
      playersReady: false,
      highestScore: 0,
    },
  };
} else {
  initialState = JSON.parse(localStorage.getItem('initialState'));
}

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
    addPoint,
    editGame,
    deleteGame,
    nextQuestion,
    setStorage,
    setPlayerName,
    setActivePlayers,
    setReady,
    nextPlayer,
    setScore,
    setShowHighscore,
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
    window.scrollTo(0, 0);
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
    const newId = uuid();
    return {
      ...state,
      games: [
        {
          name: state.admin.quizName,
          questions: state.admin.questions.map((item) => {
            return {
              question: item.question,
              answers: [
                {
                  text: item.correctAnswer,
                  correct: true,
                  bg: 'bg-green-500',
                },
                { text: item.option1, correct: false, bg: 'bg-red-500' },
                { text: item.option2, correct: false, bg: 'bg-red-500' },
                { text: item.option3, correct: false, bg: 'bg-red-500' },
              ],
              answered: false,
              point: false,
            };
          }),
          highscore: [],
          showHighscore: true,
          id: newId,
        },
        ...state.games,
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
    let random = payload.questions
      .map((q) => ({ q, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ q }) => q);

    random = random.map((q) => {
      let random = q.answers
        .map((q) => ({ q, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ q }) => q);
      return { ...q, answers: random };
    });

    return {
      ...state,
      quiz: {
        ...state.quiz,
        playing: true,
        currPlayer: 1,
        players: state.quiz.players.map((p) => {
          return { ...p, score: 0 };
        }),
        game: [
          {
            ...payload,
            questions: random,
          },
        ],
      },
    };
  },
  backToGames: (state) => {
    return {
      ...state,
      quiz: {
        ...state.quiz,
        playing: false,
        playersReady: false,
        points: 0,
        currQuestion: 0,
      },
    };
  },
  addPoint: (state) => {
    return { ...state, quiz: { ...state.quiz, points: state.quiz.points + 1 } };
  },
  editGame: (state, game) => {
    return {
      ...state,
      admin: {
        ...state.admin,
        quizName: game.name,
        questions: game.questions.map((q) => {
          return {
            question: q.question,
            correctAnswer: q.answers[0].text,
            option1: q.answers[1].text,
            option2: q.answers[2].text,
            option3: q.answers[3].text,
            id: uuid(),
          };
        }),
      },
      games: state.games.filter((g) => g.id !== game.id),
    };
  },
  deleteGame: (state, id) => {
    return {
      ...state,
      games: state.games.filter((game) => game.id !== id),
    };
  },
  nextQuestion: (state) => {
    return {
      ...state,
      quiz: { ...state.quiz, currQuestion: state.quiz.currQuestion + 1 },
    };
  },
  setStorage: (state) => {
    localStorage.setItem('initialState', JSON.stringify(state));
    return { ...state };
  },
  setPlayerName: (state, payload) => {
    return {
      ...state,
      quiz: {
        ...state.quiz,
        players: state.quiz.players.map((p) => {
          return p.id === payload.player ? { ...p, name: payload.text } : p;
        }),
      },
    };
  },
  setActivePlayers: (state, nr) => {
    return { ...state, quiz: { ...state.quiz, activePlayers: nr } };
  },
  setReady: (state) => {
    return {
      ...state,
      quiz: { ...state.quiz, playersReady: state.quiz.ready ? false : true },
    };
  },
  nextPlayer: (state) => {
    return {
      ...state,
      quiz: {
        ...state.quiz,
        currPlayer: state.quiz.currPlayer + 1,
        currQuestion: 0,
      },
    };
  },
  setScore: (state, payload) => {
    const currPlayer = state.quiz.players.filter((p) => p.id === payload);

    let highscoreArr = state.games.filter((game) => {
      if (game.name === state.quiz.game[0].name) {
        return game;
      }
    });
    highscoreArr = highscoreArr[0].highscore;

    let sameName = false;

    if (highscoreArr.length === 0 && state.quiz.points !== 0) {
      highscoreArr.push({
        name: currPlayer[0].name,
        score: state.quiz.points,
        id: uuid(),
      });
    } else {
      highscoreArr.forEach((player) => {
        if (player.name === currPlayer[0].name) {
          sameName = true;
        }
      });
      if (sameName) {
        highscoreArr = highscoreArr.map((player) => {
          return player.name === currPlayer[0].name &&
            player.score < state.quiz.points
            ? { ...player, score: state.quiz.points }
            : player;
        });
      } else if (!sameName && state.quiz.points !== 0) {
        highscoreArr.push({
          name: currPlayer[0].name,
          score: state.quiz.points,
          id: uuid(),
        });
      }
    }
    return {
      ...state,
      quiz: {
        ...state.quiz,
        players: state.quiz.players.map((player) => {
          return player.id === payload
            ? { ...player, score: state.quiz.points }
            : player;
        }),
        points: 0,
      },

      games: state.games.map((game) => {
        return game.id === state.quiz.game[0].id && state.quiz.points !== 0
          ? {
              ...game,
              highscore: highscoreArr,
            }
          : game;
      }),
    };
  },
  setShowHighscore: (state, name) => {
    return {
      ...state,
      games: state.games.map((game) => {
        return game.name === name
          ? { ...game, showHighscore: game.showHighscore ? false : true }
          : game;
      }),
    };
  },
});
