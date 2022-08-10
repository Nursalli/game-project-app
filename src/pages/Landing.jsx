import { GameBox } from "../components/index";

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

    </div>
  )
}

export default Landing;
