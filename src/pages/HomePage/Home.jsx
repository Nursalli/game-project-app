import { GameList, GameHistory } from "../../components/index"
import styles from "./HomeStyle.css"

function Home() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-5">
            <p>Your Accumulation Points: <span>9992999</span></p>
          </div>
          <div className="col-5 d-flex justify-content-end">
            <p className="userName">@Your Name</p>
            <div className="badgeIcon text-center">Your Badge</div>
          </div>
        </div>
        
        <div className="row justify-content-around">
          <div className="col-5 border">
            <div className="row-1 subTitle">
              <p>Your Played Games</p>
            </div>
            <div className="row-2 scrollFlow"> 
              <GameList gameName="Game Suit" gamePoint="3005" />
              <GameList gameName="Game 2" gamePoint="3005" />
              <GameList gameName="Game 3" gamePoint="3005" />
              <GameList gameName="Game 4" gamePoint="3005" />
              <GameList gameName="Game 5" gamePoint="3005" />
              <GameList gameName="Game 6" gamePoint="3005" />
            </div>
          </div>
          <div className="col-5 border">
            <div className="row-1 subTitle">
              <p>Histories</p>
            </div>
            <div className="row-2 scrollFlow">
              <GameHistory gameName="Game Suit" addPoint="+10" />
              <GameHistory gameName="Game Suit" addPoint="+12" />
              <GameHistory gameName="Game Suit" addPoint="+5" />
              <GameHistory gameName="Game Suit" addPoint="+5" />
              <GameHistory gameName="Game Suit" addPoint="+7" />
              <GameHistory gameName="Game Suit" addPoint="+8" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
