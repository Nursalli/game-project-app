import { useParams } from 'react-router-dom';

function GameDetails() {
  const { gameId } = useParams();

  return (
    <div>
      <h1>Game: {gameId}</h1>
    </div>
  )
}

export default GameDetails;
