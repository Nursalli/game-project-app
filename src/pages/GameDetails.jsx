import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameDetailsComponent from "../components/GameDetailsComponent";
import authUser from "../utils/authUser";
import { useNavigate } from "react-router-dom";

function GameDetails() {
  const { gameId } = useParams();
  const [data, setData] = useState({});
  const [leaderBoards, setLeaderBoards] = useState([]);
  const navigate = useNavigate();
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  useEffect(() => {
    axios
      .get("/games/" + gameId, config)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/games/leaderboard/" + gameId, config)
      .then((res) => {
        setLeaderBoards(res.data?.data);
      })
      .catch((err) => {
        console.log(err.data);
      });
  }, []);

  const handlePlayingGame = () => {
    let route = data.data?.id;
    axios
      .post("/games/play-count/" + route, {}, config)
      .then((res) => {
        navigate("/playing/" + route);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    width: "460px",
  };

  return (
    <div className="container d-flex justify-content-around">
      <div className="d-flex flex-column align-items-center">
        <h1>{data.data?.title}</h1>
        <img src={data.data?.thumbnail} style={imageStyle} alt="..." />
        <p style={pStyle}>{data.data?.description}</p>
        <div className="border rounded border-dark p-3">
          <ul>
            <li>Telah Bermain {data.data?.playCount} kali</li>
            <li>{data.data?.viewCount} Orang Tertarik untuk Bermain</li>
          </ul>
        </div>
        <div className="d-flex w-100 justify-content-center pt-5">
          <button
            className="btn btn-primary btn-block mb-4"
            onClick={handlePlayingGame}
          >
            Play Now
          </button>
        </div>
      </div>

      <div className="border p-3">
        <p>leaderboards</p>
        <div style={overFlowStyle}>
          {leaderBoards.map((lead, index) => {
            return (
              <GameDetailsComponent
                key={index}
                id={lead.id}
                email={lead.email}
                name={lead.name}
                BadgeName={lead.badge}
                gamePoint={lead.points}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GameDetails;
