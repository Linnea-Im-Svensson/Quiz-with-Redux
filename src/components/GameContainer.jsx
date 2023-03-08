import { useQuiz, nextPlayer, setScore } from '../redux/quiz';
import GameQuestion from './GameQuestion';
import Results from './Results';

function GameContainer() {
  const { quiz } = useQuiz();

  return (
    <>
      {quiz.game[0].questions[quiz.currQuestion] !== undefined ? (
        <GameQuestion question={quiz.game[0].questions[quiz.currQuestion]} />
      ) : quiz.currPlayer !== parseInt(quiz.activePlayers) ? (
        <button
          onClick={() => nextPlayer(quiz.currPlayer)}
          className='p-4 rounded-lg bg-myPurple text-blue-100 border-2 border-blue-100'
        >
          Next Player
        </button>
      ) : (
        <Results />
      )}
    </>
  );
}

export default GameContainer;
