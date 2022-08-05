import { useParams } from 'react-router-dom';

function Playing() {
  const { gameId } = useParams();

  return (
    <div>
      <h1>Playing Game: {gameId}</h1>
    </div>
  )
}

export default Playing;
