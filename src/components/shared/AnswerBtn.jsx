import { useQuiz, addPoint, nextQuestion } from '../../redux/quiz';
import { useState } from 'react';

function AnswerBtn({ answer }) {
  const { quiz } = useQuiz();

  const [bg, setBg] = useState('bg-gray-400');

  return (
    <button
      onClick={() => (
        answer.correct === true
          ? (setBg(answer.bg),
            setTimeout(() => setBg('bg-gray-400'), 1000),
            addPoint())
          : setBg(answer.bg),
        setTimeout(() => (nextQuestion(), setBg('bg-gray-400')), 1000)
      )}
      className={`h-full w-full  border-2  hover:bg-opacity-70 ${bg}`}
    >
      <p>{answer.text}</p>
    </button>
  );
}

export default AnswerBtn;
