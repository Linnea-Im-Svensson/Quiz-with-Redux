import { setAnswered, useQuiz, addPoint } from '../../redux/quiz';
import { useState } from 'react';

function AnswerBtn({ nr, question }) {
  const { quiz, games } = useQuiz();
  console.log(question.question);
  console.log(games);
  console.log('quiz.game: ', quiz.game);

  const [bg, setBg] = useState('bg-gray-400');

  return (
    <button
      onClick={() => (
        quiz.game[0].questions[0].answers[nr].correct === true
          ? (setBg(quiz.game[0].questions[0].answers[nr].bg),
            setTimeout(() => setAnswered(question.question), 1000),
            addPoint())
          : setBg(quiz.game[0].questions[0].answers[nr].bg),
        setTimeout(() => setAnswered(question.question), 1000)
      )}
      className={`h-full w-full  border-2  hover:bg-opacity-70 ${bg}`}
    >
      <p>{question.answers[nr].text}</p>
    </button>
  );
}

export default AnswerBtn;
