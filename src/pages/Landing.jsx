import { GameBox } from "../components/index";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Landing() {

  const pStyle1 = {
    textSize: "200%",
    textAlign: "center",
    paddingTop: "3rem",
  };
  
  const pStyle2 = {
    textAlign: "center",
    paddingTop: "1rem",
    paddingLeft: "15rem",
    paddingRight: "15rem",
  };

  const [games, setGames] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios("/games/landing");
      if (!ignore) setGames(result.data.data);
    }

    fetchData();
    return () => { ignore = true; }
  }, []);

  return (
    <div className="justify-content-around">
    
    <div className="container-fluid justify-content-center border border-secondary">
      <p style={pStyle1}>Lorem ipsum dolor sit</p>
      <p style={pStyle2}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          minima ipsum facere sequi, odit, pariatur distinctio debitis vitae
          modi unde vero dolor adipisci labore iusto a assumenda officiis odio
          autem?
      </p>

      <div className="d-flex w-100 justify-content-center pt-5">
          <button className="btn btn-secondary btn-block mb-4">Play Suit</button>
      </div>
    </div>
    
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

      <div className="d-flex justify-content-center">
        <a className="button btn btn-lg btn-primary" href="/games/listing">See More</a>
      </div>
    </div>

    </div>
  )
}

export default Landing;
