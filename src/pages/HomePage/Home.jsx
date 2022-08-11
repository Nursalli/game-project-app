import { GameList, GameHistory } from "../../components/index";
import styles from "./HomeStyle.css";
import fetchApi from "../../utils/fetchApi";
import { useEffect, useState } from "react";
import authUser from "../../utils/authUser";

function Home() {
  const [badgesPoint, setBadgesPoint] = useState({});
  const [myHistories, setMyHistories] = useState([]);
  const [myGames, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetchApi({
        uriPath: "/users/badges-points/" + (await authUser()),
        method: "GET",
        headers: {
          Authorization: true,
        },
      });
      if (response) {
        setBadgesPoint(response.data);
      }

      response = await fetchApi({
        uriPath: "/users/my-histories",
        method: "GET",
        headers: {
          Authorization: true,
        },
      });
      if (response) {
        setMyHistories(response.data);
      }

      response = await fetchApi({
        uriPath: "/users/my-games",
        method: "GET",
        headers: {
          Authorization: true,
        },
      });
      if (response) {
        setGames(response.data);
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    console.log(badgesPoint);
    console.log(myHistories);
    console.log(myGames);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-5">
            <p>
              Your Accumulation Points: <span>{badgesPoint.points}</span>
            </p>
          </div>
          <div className="col-5 d-flex justify-content-end">
            <p className="userName">{badgesPoint.userFirstName}</p>
            <div className="badgeIcon text-center" onClick={handleClick}>
              {badgesPoint.badge}
            </div>
          </div>
        </div>

        <div className="row justify-content-around">
          <div className="col-5 border">
            <div className="row-1 subTitle">
              <p>Your Played Games</p>
            </div>
            <div className="row-2 scrollFlow">
              {myGames.map((games, index) => {
                return (
                  <GameList
                    key={index}
                    gameName={games.gameName}
                    gamePoint={games.totalPointsEarned || 0}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-5 border">
            <div className="row-1 subTitle">
              <p>Histories</p>
            </div>
            <div className="row-2 scrollFlow">
              {myHistories.map((history, index) => {
                return (
                  <GameHistory
                    key={index}
                    gameName={history.gameName}
                    addPoint={history.pointsEarned || 0}
                    gameThumbnail={history.gameThumbnail}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
