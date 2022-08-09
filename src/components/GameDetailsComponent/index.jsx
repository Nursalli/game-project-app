import "./index.css";

function index(props) {
  return (
    <>
      <div className="d-flex justify-content-between border listContainer">
        <div className="col d-flex justify-content-center align-items-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/691/497/large_2x/rock-paper-scissors-neon-icons-vector.jpg"
            className="border img-thumbnail thumbnails"
            alt="..."
          />
        </div>

        <div className="col d-flex flex-column justify-content-center align-items-start">
          <div className="">Player Vladi</div>
          <div className="pb-2">@username</div>
          <div className="border w-100 text-center">BadgeName</div>
        </div>

        <div className="col d-flex align-items-center gamePoint">
          <p className="value">
            <strong>{props.gamePoint}</strong>
          </p>
          <p>points</p>
        </div>
      </div>
    </>
  );
}

export default index;
