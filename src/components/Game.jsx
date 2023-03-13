import { useQuiz, backToGames, nextPlayer } from '../redux/quiz';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import Players from './Players';
import GameContainer from './GameContainer';
import { useEffect, useState } from 'react';

function Game() {
  const { quiz } = useQuiz();
  // const [game, setGame] = useState(
  //   quiz.players.map((p, index) => {
  //     return (
  //       quiz.players[index].name !== '' &&
  //       quiz.players[index].id === quiz.currPlayer && (
  //         <GameContainer key={p.id} />
  //       )
  //     );
  //   })
  // );

  // useEffect(() => {
  //   setGame(
  //     quiz.players.map((p, index) => {
  //       return (
  //         quiz.players[index].name !== '' &&
  //         quiz.players[index].id === quiz.currPlayer && (
  //           <GameContainer key={index} />
  //         )
  //       );
  //     })
  //   );
  // }, [quiz.currPlayer]);

  return (
    <>
      {quiz.playersReady ? (
        <div className='flex flex-col items-center justify-start h-[80vh] md:w-[80vw]  w-[100vw] mt-28 relative '>
          <button onClick={() => backToGames()}>
            <BsFillArrowLeftSquareFill className='absolute text-[rgba(160,22,167,1)] top-0 text-4xl left-4' />
          </button>
          <div className='flex flex-col justify-center items-center gap-4 mb-6 text-white'>
            <p className='text-2xl font-semibold'>{quiz.game[0].name}</p>
            {quiz.currQuestion !== quiz.game[0].questions.length && (
              <p className='font-semibold'>
                Now playing: {quiz.players[quiz.currPlayer - 1].name}
              </p>
            )}
          </div>

          <div className='w-fit h-[fit overflow-hidden  flex flex-col gap-8'>
            {quiz.players.map((p, index) => {
              return (
                quiz.players[index].name !== '' &&
                quiz.players[index].id === quiz.currPlayer && (
                  <GameContainer key={p.id} />
                )
              );
            })}
          </div>
        </div>
      ) : (
        <Players />
      )}
    </>
  );
}

export default Game;
