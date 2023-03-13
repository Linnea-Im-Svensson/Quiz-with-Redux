import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from 'react-icons/io';
import { setShowHighscore } from '../redux/quiz';

function HighscoreGame({ game }) {
  let sortedArray = game.highscore.sort((a, b) => b.score - a.score);
  return (
    <li
      className={`flex flex-col rounded-lg overflow-hidden bg-slate-100 bg-opacity-30 relative `}
    >
      <div>
        <button
          onClick={() => setShowHighscore(game.name)}
          className='bg-myPurple w-full text-center p-2 relative font-semibold text-purple-50'
        >
          {game.name}
          {game.showHighscore ? (
            <IoIosArrowDropupCircle className='absolute top-2.5 right-3 text-xl' />
          ) : (
            <IoIosArrowDropdownCircle className='absolute top-2.5 right-3 text-xl' />
          )}
        </button>
        <ul
          className={`flex flex-col gap-1 py-1 overflow-y-scroll ${
            game.showHighscore ? 'h-[184px]' : 'hidden'
          }`}
        >
          {sortedArray.map((score, index) => {
            return (
              <li
                key={score.id}
                className={`flex font-semibold p-4 items-center justify-around bg-white ${
                  index % 2 === 0 ? 'bg-opacity-80' : 'bg-opacity-30'
                }`}
              >
                <p>{score.name}</p>
                <p>{score.score}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
}

export default HighscoreGame;
