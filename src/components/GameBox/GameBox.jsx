import "./GameBoxComponent.css"

function GameBox (props) {
    return (
        <>
            <div className="row justify-content-space-evenly grid_game">
                <div className="col d-flex justify-content-center align-items-center item_game">
                   <img src="https://static.vecteezy.com/system/resources/previews/000/691/497/large_2x/rock-paper-scissors-neon-icons-vector.jpg" className="border img-thumbnail" alt="..." />
                </div>

                <div className="border gameName justify-content-center">
                    <p>{props.gameName}</p>
                    <h4>Adalah blabla blabla blabla blabla blabla blabla blabla</h4>
                </div>

                <div className="border pointName">
                    <ul>
                        <li>Telah dimainkan X kali</li>
                        <li>X Orang Tertarik untuk Bermain</li>
                    </ul>
                </div>

                <div className="d-flex w-100 justify-content-center pt-2">
                    <button className="btn btn-secondary btn-block mb-2">PLAY</button>
                </div>
            </div>
    
        </>
    )
}

export default GameBox