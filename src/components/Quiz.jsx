import { useQuiz, createGame, randomizeArr } from '../redux/quiz';

import Game from './Game';

function Quiz() {
  const { games, quiz } = useQuiz();
  console.log(quiz);

  return (
    <>
      {quiz.playing ? (
        <Game />
      ) : (
        <div className='flex flex-col items-center justify-start h-[80vh] mt-28'>
          <h1 className='text-3xl'>Games:</h1>
          <div className='grid grid-cols-2 w-[80vw] h-fit p-4 mt-4 border-2'>
            {games.map((game) => {
              return (
                <button
                  onClick={() => (createGame(game), randomizeArr())}
                  key={game.id}
                >
                  {game.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Quiz;
