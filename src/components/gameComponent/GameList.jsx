import "./GameComponent.css"

function GameList (props) {
    return (
        <>
            <div className="row border listContainer" >
                <div className="col d-flex justify-content-center align-items-center">
                    <img src="https://static.vecteezy.com/system/resources/previews/000/691/497/large_2x/rock-paper-scissors-neon-icons-vector.jpg" className="border img-thumbnail thumbnails" alt="..." />
                </div>

                <div className="col d-flex flex-column justify-content-center align-items-start gameName">
                    <p>{props.gameName}</p>
                    <button type="button" className="c-btn">
                        Play
                    </button>
                </div>

                <div className="col d-flex flex-column justify-content-center align-items-start gamePoint">
                    <p>points earned:</p>
                    <p className="value">{props.gamePoint}</p>
                </div>
            </div>
        </>
    )
}

export default GameList