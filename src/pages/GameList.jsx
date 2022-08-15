import { GameBox } from "../components/index";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios("/games/listing");
      if (!ignore) setGames(result.data.data);
    }

    fetchData();
    return () => { ignore = true; }
  }, []);
  return (
    <div className="justify-content-around">
      <div className="d-flex w-100 justify-content-center pt-5">
            <p>Our Games</p>
      </div>

      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          {
            games.map((game) => {
              return (
                <div className= "col-md-4 mb-4" key={"game" + game.id}>
                  <GameBox 
                    gameId={game.id}
                    gameImg={game.thumbnail}
                    gameName={game.title}
                    gameDescription={game.description}
                    playCount={game.playCount}
                    viewCount={game.viewCount}
                    gameUrl={game.gameUrl}
                  />
                </div>            
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default GameList;
