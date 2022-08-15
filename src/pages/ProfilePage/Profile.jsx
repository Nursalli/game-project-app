// import { useParams } from 'react-router-dom';
import { GameList } from "../../components/index";
import jwtDecode from "jwt-decode";
import "./Profile.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Profile() {
  const { profileId } = useParams();
  const [authUser, setAuthUser] = useState("");
  const token = localStorage.getItem("token");
  const [guest, setGuest] = useState(false);
  const [badges, setBadges] = useState({});
  const [userBio, setUserBio] = useState({
    name: "",
    email: "",
    firstName: "",
    lastName: "",
    bio: "",
    birthday: new Date(),
  });
  const [myGames, setMyGames] = useState([]);

  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  useEffect(() => {
    if (token !== null) {
      var decoded = jwtDecode(token);
      setAuthUser(decoded.sub);
    }
  }, [token]);

  useEffect(() => {
    setGuest(false);
    if (profileId !== authUser) {
      setGuest(true);
    }
  }, [authUser, profileId]);

  useEffect(() => {
    axios
      .get("/users/badges-points/" + profileId, config)
      .then((res) => {
        setBadges(res.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/users/bio/" + profileId, config)
      .then((res) => {
        setUserBio({
          email: res.data?.data.email,
          firstName: res.data?.data.firstName,
          lastName: res.data?.data.lastName,
          bio: res.data?.data.bio,
          country: res.data?.data.country,
          birthday: res.data?.data.birthday,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/users/my-games", config)
      .then((res) => {
        setMyGames(res.data?.data);
        console.log(res.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    setUserBio({ ...userBio, [e.target.name]: e.target.value });
  };

  const handleEditBio = async (e) => {
    e.preventDefault();
    axios
      .post(
        "/users/edit-profile",
        {
          firstName: userBio.firstName,
          lastName: userBio.lastName,
          email: userBio.email,
          bio: userBio.bio,
          country: userBio.country,
          birthday: new Date(userBio.birthday),
        },
        config
      )
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: res.data?.message || "succesfully edited",
          timer: 2500,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response?.data?.message || "something wrong!",
        });
      });
  };
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center mb-4">
        <h1>@{badges.userFirstName}</h1>
        <div className="badgeIcon text-center">{badges.badge}</div>
        <p className="profilePoint">{badges.points} points</p>
      </div>

      <div className="text-center">
        <img
          className="profilePict border img-thumbnails"
          src="https://image.shutterstock.com/image-vector/male-avatar-profile-picture-vector-260nw-149083895.jpg"
          alt="..."
        />
      </div>

      <div className=" profileInfo">
        <div className="row justify-content-around gx-5">
          {/* <-- LEFT SIDE --> */}
          <div className="col-5">
            <form className="formFlow border p-4">
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <div className="row gx-2">
                  <div className="col-3">
                    <label className="form-label" htmlFor="form2Example1">
                      Email
                    </label>
                  </div>
                  <div className="col-9">
                    <input
                      type="email"
                      id="form2Example1"
                      name="email"
                      value={userBio.email}
                      className="form-control"
                      onChange={handleChange}
                      disabled={guest}
                    />
                  </div>
                </div>
              </div>

              {/* <!-- First Name input --> */}
              <div className="form-outline mb-4">
                <div className="row gx-2">
                  <div className="col-3">
                    <label className="form-label" htmlFor="form2Example1">
                      First Name
                    </label>
                  </div>
                  <div className="col-9">
                    <input
                      type="text"
                      name="firstname"
                      id="form2Example1"
                      value={userBio.firstName}
                      className="form-control"
                      onChange={handleChange}
                      disabled={guest}
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Last Name input --> */}
              <div className="form-outline mb-4">
                <div className="row gx-2">
                  <div className="col-3">
                    <label className="form-label" htmlFor="form2Example1">
                      Last Name
                    </label>
                  </div>
                  <div className="col-9">
                    <input
                      type="text"
                      value={userBio.lastName}
                      name="lastName"
                      id="form2Example1"
                      className="form-control"
                      onChange={handleChange}
                      disabled={guest}
                    />
                  </div>
                </div>
              </div>

              {/* <-- Bio Input --> */}
              <div className="form-outline mb-4">
                <div className="row gx-2">
                  <div className="col-3">
                    <label className="form-label" htmlFor="form2Example1">
                      Bio
                    </label>
                  </div>
                  <div className="col-9">
                    <textarea
                      type="text"
                      value={userBio.bio}
                      name="bio"
                      id="form2Example1"
                      className="form-control"
                      onChange={handleChange}
                      disabled={guest}
                    />
                  </div>
                </div>
              </div>

              {/* <-- Country Input --> */}
              <div className="form-outline mb-4">
                <div className="row gx-2">
                  <div className="col-3">
                    <label className="form-label" htmlFor="form2Example1">
                      Country
                    </label>
                  </div>
                  <div className="col-9">
                    <input
                      type="text"
                      name="country"
                      value={userBio.country}
                      id="form2Example1"
                      className="form-control"
                      onChange={handleChange}
                      disabled={guest}
                    />
                  </div>
                </div>
              </div>

              {/* <-- Birthday Input --> */}
              <div className="form-outline mb-4">
                <div className="row gx-2">
                  <div className="col-3">
                    <label className="form-label" htmlFor="form2Example1">
                      Birthday
                    </label>
                  </div>
                  <div className="col-9">
                    <input
                      type="date"
                      name="birthday"
                      value={userBio.birthday}
                      id="form2Example1"
                      className="form-control"
                      onChange={handleChange}
                      disabled={guest}
                    />
                  </div>
                </div>
              </div>
            </form>
            {/* <!-- Submit button --> */}
            {!guest && (
              <div className="d-flex w-100 justify-content-end">
                <button
                  className="btn btn-primary btn-block mt-3 mb-2 editButton"
                  onClick={handleEditBio}
                >
                  Edit Profile
                </button>
              </div>
            )}
          </div>

          {/* <-- RIGHT SIDE --> */}
          <div className="col-6 border gameBody">
            <div className="row-1 subTitle">
              <p>My Games</p>
            </div>
            <div className="row-2 scrollFlow2">
              {myGames.map((games) => {
                return (
                  <GameList
                    gameName={games.gameName}
                    gameThumbnail={games.gameThumbnail}
                    gamePoint={games.totalPointsEarned}
                    gameUrl={games.gameUrl}
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

export default Profile;
