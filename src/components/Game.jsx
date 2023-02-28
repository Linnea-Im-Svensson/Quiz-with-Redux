import { useQuiz, backToGames } from '../redux/quiz';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import GameAnswer from './GameAnswer';
import AnswerBtn from './shared/AnswerBtn';

function Game() {
  const { quiz, randomize } = useQuiz();

  return (
    <div className='flex flex-col items-center justify-start h-[80vh] md:w-[80vw]  w-[100vw] mt-28 relative'>
      <button onClick={() => backToGames()}>
        <BsFillArrowLeftSquareFill className='absolute top-0 text-4xl left-2' />
      </button>
      <h2 className='text-xl font-semibold mb-6'>{quiz.game[0].name}</h2>

      <div>
        {' '}
        <h2 className='text-2xl font-semibold ml-4 mb-4'>
          {quiz.game[0].questions[0][0].question}
        </h2>
        <div className='grid grid-cols-2 lg:w-[60vw] md:w-[80vw] w-[90vw] h-40'>
          {randomize.map((answer) => {
            return (
              <AnswerBtn key={answer} nr={answer}>
                <GameAnswer option={answer} />
              </AnswerBtn>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Game;
