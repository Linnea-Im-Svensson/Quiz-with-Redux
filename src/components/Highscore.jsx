import { useQuiz } from '../redux/quiz';
import HighscoreGame from './HighscoreGame';

function Highscore() {
  const { games } = useQuiz();

  return (
    <div className='flex flex-col items-center justify-start h-[80vh] mt-28 overflow-y-scroll'>
      <h1 className='text-3xl text-blue-100 mb-4'>Highscore</h1>
      <ul className='w-[85vw] flex flex-col gap-4'>
        {games.map((game) => (
          <HighscoreGame game={game} key={game.id} />
        ))}
      </ul>
    </div>
  );
}

export default Highscore;
