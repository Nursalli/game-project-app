import "./GameBoxComponent.css"

function GameBox (props) {
    return (
        <>
            <div className="card h-100">
                <img className="card-img-top" src={props.gameImg} alt={props.gameName} />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{props.gameName}</h5>
                    <p className="card-text">{props.gameDescription}</p>
                    <p className="card-text"><small className="text-muted">Telah dimainkan {props.playCount} kali<br/>{props.viewCount} orang tertarik untuk bermain</small></p>
                    <a href={props.gameUrl} className="btn btn-outline-primary">Play This Game</a>
                </div>
            </div>
        </>
    )
}

export default GameBox