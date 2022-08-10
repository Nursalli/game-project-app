import { GameBox } from "../components/index";

function GameList() {
  return (
    <div className="justify-content-around">
      <div className="d-flex w-100 justify-content-center pt-5">
            <p>Our Games</p>
      </div>

      <div class = "container-fluid d-flex justify-content-center">
      <div class = "row">
        <div class = "col-sm-4">
          <GameBox gameName="Game 1"/>
        </div>
        <div class = "col-sm-4">
          <GameBox gameName="Game 2"/>
        </div>
        <div class = "col-sm-4">
          <GameBox gameName="Game 3"/>
        </div>
        <div class = "col-sm-4">
          <GameBox gameName="Game 4"/>
        </div>
        <div class = "col-sm-4">
          <GameBox gameName="Game 5"/>
        </div>
        <div class = "col-sm-4">
          <GameBox gameName="Game 6"/>
        </div>
        <div class = "col-sm-4">
          <GameBox gameName="Game 7"/>
        </div>
        <div class = "col-sm-4">
          <GameBox gameName="Game 8"/>
        </div>
        <div class = "col-sm-4">
          <GameBox gameName="Game 9"/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default GameList;
