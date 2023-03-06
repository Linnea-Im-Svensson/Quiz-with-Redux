import { useQuiz, backToGames } from '../redux/quiz';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import GameQuestion from './GameQuestion';

function Game() {
  const { quiz } = useQuiz();

  return (
    <div className='flex flex-col items-center justify-start h-[80vh] md:w-[80vw]  w-[100vw] mt-28 relative'>
      <button onClick={() => backToGames()}>
        <BsFillArrowLeftSquareFill className='absolute top-0 text-4xl left-2' />
      </button>
      <h2 className='text-xl font-semibold mb-6'>{quiz.game[0].name}</h2>

      <div className='w-fit h-[240px] overflow-hidden  flex flex-col gap-8'>
        {quiz.game[0].questions[quiz.currQuestion] !== undefined ? (
          <GameQuestion question={quiz.game[0].questions[quiz.currQuestion]} />
        ) : (
          <div className='mt-20 flex flex-col items-center justify-center'>
            <p>Game done</p>
            <p className='mt-8'>Total points: {quiz.points}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
