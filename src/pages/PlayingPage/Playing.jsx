// import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import PlayGame from "../../utils/playGame";
import { useNavigate, useParams } from "react-router-dom";
import "./Playing.css";

function Playing() {
  const { gameId } = useParams();
  const navigate = useNavigate();

  const onButtonClick = (e) => {
    PlayGame(e);
  };

  useEffect(() => {
    if (gameId > 1) {
      navigate("/404", { replace: true });
    }
  }, []);

  return (
    <>
      {/* <div>
        <h1>Playing Game: {gameId}</h1>
      </div> */}

      {/* <!-- PLAYER NAME --> */}
      <div className="playerName container-fluid row justify-content-around">
        <div className="col-sm-3 text-center">
          <p>PLAYER 1</p>
        </div>
        <div className="col-sm-2" />
        <div className="col-sm-3 text-center">
          <p>COM</p>
        </div>
      </div>
      {/* <!-- PLAYER NAME END--> */}

      {/* <!-- ACTIONS --> */}
      <div className="Action container-fluid row justify-content-around">
        {/* <!-- Player --> */}
        <div className="playerButton col-sm-3 d-flex flex-column justify-content-sm-around align-items-center">
          <button onClick={onButtonClick} className="Player">
            <img src="assets/batu.png" alt="" className="Rock" />
          </button>
          <button onClick={onButtonClick} className="Player">
            <img src="assets/kertas.png" alt="" className="Paper" />
          </button>
          <button onClick={onButtonClick} className="Player">
            <img src="assets/gunting.png" alt="" className="Scissors" />
          </button>
        </div>

        {/* <!-- Status --> */}
        <div className="status col-sm-3 d-flex align-items-center justify-content-center text-center">
          VS
        </div>

        {/* <!-- Computer --> */}
        <div className="computerButton col-sm-3 d-flex flex-column justify-content-sm-around align-items-center">
          <button>
            <img src="assets/batu.png" alt="" className="Rock" />
          </button>
          <button>
            <img src="assets/kertas.png" alt="" className="Paper" />
          </button>
          <button>
            <img src="assets/gunting.png" alt="" className="Scissors" />
          </button>
        </div>
      </div>
      {/* <!-- ACTIONS END --> */}

      {/* <!-- REFRESH --> */}
      <div className="refresh container-fluid row">
        <div className="resetButton col-sm-12 text-center">
          <button>
            <img src="assets/refresh.png" alt="" className="r-img" />
          </button>
        </div>
      </div>
      {/* <!-- REFRESH END --> */}
    </>
  );
}

export default Playing;
