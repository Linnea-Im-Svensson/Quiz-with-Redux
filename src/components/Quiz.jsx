import { useQuiz } from '../redux/quiz';

import Game from './Game';
import GameBtn from './shared/GameBtn';

function Quiz() {
  const { games, quiz } = useQuiz();
  return (
    <div>
      {quiz.playing ? (
        <Game />
      ) : (
        <div className='flex flex-col items-center justify-start h-[80vh] mt-28 overflow-y-scroll'>
          <h1 className='text-3xl text-blue-100'>Games</h1>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 lg:w-[55vw] md:w-[65vw] w-[80vw] h-fit p-4 mt-4 '>
            {games.map((game) => {
              return <GameBtn key={game.id} game={game} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
