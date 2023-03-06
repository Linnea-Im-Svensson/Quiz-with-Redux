import { useQuiz } from '../redux/quiz';

import Game from './Game';
import GameBtn from './shared/GameBtn';

function Quiz() {
  const { games, quiz } = useQuiz();
  return (
    <>
      {quiz.playing ? (
        <Game />
      ) : (
        <div className='flex flex-col items-center justify-start h-[80vh] mt-28'>
          <h1 className='text-3xl'>Games:</h1>
          <div className='grid grid-cols-2 gap-4 w-[80vw] h-fit p-4 mt-4 border-2'>
            {games.map((game) => {
              return <GameBtn key={game.id} game={game} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Quiz;
