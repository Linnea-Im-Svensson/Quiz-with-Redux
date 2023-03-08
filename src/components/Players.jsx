import React, { useEffect, useState } from 'react';
import {
  useQuiz,
  setReady,
  setPlayerName,
  setActivePlayers,
} from '../redux/quiz';

function Players() {
  const { quiz } = useQuiz();
  const [playersS, setPlayersS] = useState([]);

  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= quiz.activePlayers; i++) {
      arr.push('');
    }
    setPlayersS(arr);
  }, [quiz.activePlayers]);

  const handleSubmit = (e) => {
    setReady();
    e.preventDefault();
  };

  return (
    <form className='mt-28' onSubmit={(e) => handleSubmit(e)}>
      <div className='flex gap-8 bg-blue-50 mx-auto w-fit px-4 py-2 rounded-lg'>
        <h2>Number of players:</h2>
        <input
          className='border-2 border-myBlue px-2'
          type='number'
          max={4}
          min={1}
          value={quiz.activePlayers}
          onChange={(e) => setActivePlayers(e.target.value)}
        />
      </div>
      {playersS.map((p, index) => (
        <div
          key={index}
          className='flex flex-col bg-blue-50 rounded-lg lg:w-[55vw] w-[80vw] p-3 my-4'
        >
          <h2 className='text-xl font-semibold mb-3 mx-auto tracking-wider'>
            Player {quiz.players[index].id}
          </h2>
          <input
            type='text'
            id='playerName'
            value={quiz.players[index].name}
            onChange={(e) =>
              setPlayerName({ text: e.target.value, player: index + 1 })
            }
            placeholder={`Enter player ${quiz.players[index].id}'s name`}
            required={true}
            className=' p-1 border-2 border-myBlue'
          />
        </div>
      ))}
      <button className='bg-myBlue p-4 rounded-lg text-blue-100 mx-auto block border-2 border-blue-300'>
        Start Game
      </button>
    </form>
  );
}

export default Players;
