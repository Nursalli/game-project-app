import { useParams } from "react-router-dom";
import GameDetailsComponent from "../components/GameDetailsComponent";

function GameDetails() {
  const { gameId } = useParams();

  const imageStyle = {
    width: "300px",
    height: "240px",
    paddingTop: "1rem",
  };

  const pStyle = {
    width: "500px",
    textAlign: "center",
    paddingTop: "1rem",
  };

  const overFlowStyle = {
    maxHeight: "550px",
    overflowY: "auto",
    overflowX: "hidden",
    margin: "12px",
    width:"400px"
  };

  return (
    <div className="container d-flex justify-content-around">
      <div className="d-flex flex-column align-items-center">
        <h1>Game: {gameId}</h1>
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/691/497/large_2x/rock-paper-scissors-neon-icons-vector.jpg"
          style={imageStyle}
          alt="..."
        />
        <p style={pStyle}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          minima ipsum facere sequi, odit, pariatur distinctio debitis vitae
          modi unde vero dolor adipisci labore iusto a assumenda officiis odio
          autem?
        </p>
        <div className="border rounded border-dark p-3">
          <ul>
            <li>Telah Bermain x kali</li>
            <li>X Orang Tertarik untuk Bermain</li>
          </ul>
        </div>
        <div className="d-flex w-100 justify-content-center pt-5">
          <button className="btn btn-primary btn-block mb-4">Play Now</button>
        </div>
      </div>

      <div className="border p-3">
        <p>leaderboards</p>
        <div style={overFlowStyle}>
          <GameDetailsComponent gameName="Game Suit" gamePoint="3005" />
          <GameDetailsComponent gameName="Game 2" gamePoint="3005" />
          <GameDetailsComponent gameName="Game 3" gamePoint="3005" />
          <GameDetailsComponent gameName="Game 4" gamePoint="3005" />
          <GameDetailsComponent gameName="Game 5" gamePoint="3005" />
          <GameDetailsComponent gameName="Game 6" gamePoint="3005" />
        </div>
      </div>
    </div>
  );
}

export default GameDetails;
