import { createGame, deleteGame, editGame } from '../../redux/quiz';
import { BsPencil } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function GameBtn({ game }) {
  return (
    <div className='bg-blue-100 px-4 py-2 rounded-lg flex items-center justify-between'>
      <button
        className='text-left w-full'
        onClick={() => createGame(game)}
        key={game.id}
      >
        {game.name}
      </button>
      <div className='flex items-center justify-center'>
        <Link to='/admin' className='mr-4' onClick={() => editGame(game)}>
          <BsPencil />
        </Link>
        <button onClick={(e) => (deleteGame(game.id), e.preventDefault())}>
          X
        </button>
      </div>
    </div>
  );
}

export default GameBtn;
