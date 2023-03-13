import {
  useQuiz,
  addPoint,
  nextQuestion,
  setScore,
  setStorage,
} from '../../redux/quiz';
import { useState } from 'react';

function AnswerBtn({ answer, letter }) {
  const { quiz } = useQuiz();

  const [bg, setBg] = useState('bg-blue-500 bg-opacity-50');

  return (
    <button
      onClick={() => (
        answer.correct === true
          ? (setBg(answer.bg),
            setTimeout(() => setBg('bg-blue-500 bg-opacity-50'), 1000),
            addPoint())
          : setBg(answer.bg),
        setTimeout(
          () => (nextQuestion(), setBg('bg-blue-500 bg-opacity-50')),
          1000
        ) &&
          quiz.game[0].questions[quiz.currQuestion + 1] === undefined &&
          (setScore(quiz.currPlayer), setStorage())
      )}
      className={`h-full w-full flex items-center justify-start p-4 gap-4 border-2 border-blue-200  hover:bg-opacity-70 ${bg} rounded-lg`}
    >
      <p className='w-10 h-10 flex items-center justify-center text-purple-100 bg-[rgba(160,22,167,1)] rounded-full'>
        {letter === 0 ? 'A' : letter === 1 ? 'B' : letter === 2 ? 'C' : 'D'}
      </p>
      <p className='text-blue-100'>{answer.text}</p>
    </button>
  );
}

export default AnswerBtn;
