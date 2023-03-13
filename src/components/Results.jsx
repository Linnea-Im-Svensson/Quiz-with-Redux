import { useEffect, useState } from 'react';
import { useQuiz } from '../redux/quiz';
import { RiVipCrown2Fill } from 'react-icons/ri';

function Results() {
  const { quiz } = useQuiz();
  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      quiz.players[i].score > highestScore &&
        setHighestScore(quiz.players[i].score);
    }
  }, []);

  return (
    <div className='mt-20 flex flex-col items-center justify-center lg:w-[55vw] md:w-[75vw] w-[85vw] bg-blue-50 rounded-lg p-4'>
      <p className='text-3xl mb-10'>Game done</p>
      <div className='flex w-full items-center justify-around'>
        {quiz.players.map((p) => {
          return (
            p.name !== '' &&
            p.id <= quiz.activePlayers && (
              <div
                key={p.id}
                className='flex flex-col items-center justify-center mb-6 relative'
              >
                {p.score === highestScore && (
                  <RiVipCrown2Fill className=' text-yellow-400 text-3xl absolute -top-7' />
                )}
                <p className='text-xl'>{p.name}</p>
                <p>{p.score}</p>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default Results;
