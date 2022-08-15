import "./index.css";

function index(props) {
  return (
    <>
      <div className="d-flex justify-content-between border rounded listContainer">
        <div className="col d-flex justify-content-center align-items-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/691/497/large_2x/rock-paper-scissors-neon-icons-vector.jpg"
            className="border img-thumbnail thumbnails"
            alt="..."
          />
        </div>

        <div
          className="col d-flex flex-column justify-content-center align-items-start"
          style={{ width: "100vw" }}
        >
          <div className="">
            <a href={`/profile/${props.id}`}>
              {props.email}
            </a>
          </div>
          <div className="pb-2">@{props.name}</div>
          <div className="border w-100 text-center">{props.BadgeName}</div>
        </div>

        <div className="col d-flex align-items-center gamePoint justify-content-end">
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
