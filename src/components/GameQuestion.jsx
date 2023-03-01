import { randomizeArr, useQuiz } from '../redux/quiz';
import AnswerBtn from './shared/AnswerBtn';

function GameQuestion({ question }) {
  const { randomize } = useQuiz();
  console.log(question);
  return (
    <div>
      {' '}
      <h2 className='text-2xl font-semibold ml-4 mb-4'>{question.question}</h2>
      <div className='grid grid-cols-2 lg:w-[60vw] md:w-[80vw] w-[90vw] h-40'>
        {/* randomizes the answers and displays them */}

        {randomize.map((answer) => {
          return <AnswerBtn key={answer} question={question} nr={answer} />;
        })}
      </div>
    </div>
  );
}

export default GameQuestion;
