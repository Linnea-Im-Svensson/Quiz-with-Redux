import { useQuiz } from '../redux/quiz';

function GameAnswer({ option }) {
  const { quiz } = useQuiz();
  return <p>{quiz.game[0].questions[0][0].answers[option].text}</p>;
}

export default GameAnswer;
