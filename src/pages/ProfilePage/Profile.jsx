// import { useParams } from 'react-router-dom';
import useForm from "../../utils/useForm";
import { GameList } from "../../components/index";
import "./Profile.css";

function Profile() {
  // const { userId } = useParams();

  const {
    handleRegister,
    name,
    // setName,
    email,
    // setEmail,
    firstName,
    // setFirstName,
    lastName,
    // setLastName,
    bio,
    // setBio,
    country,
    // setCountry,
    birthday,
    // setBirthday,
  } = useForm();

  return (
    <>
      {/* <div>
        <h1>Profile: {userId}</h1>
      </div> */}
      <div className='container d-flex flex-column justify-content-center align-items-center mb-4'>
        <h1>@my name</h1>
        <div className="badgeIcon text-center">Your Badge</div>
        <p className="profilePoint">9992999 points</p>
      </div>

      <div className='text-center'>
        <img className="profilePict border img-thumbnails" src="https://image.shutterstock.com/image-vector/male-avatar-profile-picture-vector-260nw-149083895.jpg" alt="..." />
      </div>

      <div className=" profileInfo">
        <div className='row justify-content-around gx-5'>
          {/* <-- LEFT SIDE --> */}
          <div className='col-5'>
            <form onSubmit={handleRegister} className="formFlow border p-4">

              {/* <!-- Name input --> */}
              <div className="form-outline mb-4">
                <div className='row gx-2'>
                  <div className='col-3'>
                    <label className="form-label" htmlFor="form2Example1">
                      Name
                    </label>
                  </div>
                  <div className='col-9'>
                    <input
                      type="text"
                      id="form2Example1"
                      // value={name}
                      className="form-control"
                      // onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              
              {/* <!-- Email input --> */}
              <div className="form-outline mb-4">
                <div className='row gx-2'>
                  <div className='col-3'>
                    <label className="form-label" htmlFor="form2Example1">
                      Email
                    </label>
                  </div>
                  <div className='col-9'>
                    <input
                      type="email"
                      id="form2Example1"
                      // value={email}
                      className="form-control"
                      // onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* <!-- First Name input --> */}
              <div className="form-outline mb-4">
                <div className='row gx-2'>
                  <div className='col-3'>
                    <label className="form-label" htmlFor="form2Example1">
                      First Name
                    </label>
                  </div>
                  <div className='col-9'>
                    <input
                      type="text"
                      id="form2Example1"
                      // value={firstName}
                      className="form-control"
                      // onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Last Name input --> */}
              <div className="form-outline mb-4">
                <div className='row gx-2'>
                  <div className='col-3'>
                    <label className="form-label" htmlFor="form2Example1">
                      Last Name
                    </label>
                  </div>
                  <div className='col-9'>
                    <input
                      type="text"
                      // value={lastName}
                      id="form2Example1"
                      className="form-control"
                      // onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* <-- Bio Input --> */}
              <div className="form-outline mb-4">
                <div className='row gx-2'>
                  <div className='col-3'>
                    <label className="form-label" htmlFor="form2Example1">
                      Bio
                    </label>
                  </div>
                  <div className='col-9'>
                    <textarea
                      type="text"
                      // value={bio}
                      id="form2Example1"
                      className="form-control"
                      // onChange={(e) => setBio(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* <-- Country Input --> */}
              <div className="form-outline mb-4">
                <div className='row gx-2'>
                  <div className='col-3'>
                    <label className="form-label" htmlFor="form2Example1">
                      Country
                    </label>
                  </div>
                  <div className='col-9'>
                    <input
                      type="text"
                      // value={country}
                      id="form2Example1"
                      className="form-control"
                      // onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* <-- Birthday Input --> */}
              <div className="form-outline mb-4">
                <div className='row gx-2'>
                  <div className='col-3'>
                    <label className="form-label" htmlFor="form2Example1">
                      Birthday
                    </label>
                  </div>
                  <div className='col-9'>
                    <input
                      type="date"
                      // value={birthday}
                      id="form2Example1"
                      className="form-control"
                      // onChange={(e) => setBirthday(e.target.value)}
                    />
                  </div>
                </div>
              </div>
    
            </form>
            {/* <!-- Submit button --> */}
            <div className="d-flex w-100 justify-content-end">
              <button className="btn btn-primary btn-block mt-3 mb-2 editButton">Edit Profile</button>
            </div>
          </div>

          {/* <-- RIGHT SIDE --> */}
          <div className='col-6 border gameBody'>
            <div className="row-1 subTitle">
              <p>My Games</p>
            </div> 
            <div className="row-2 scrollFlow2"> 
              <GameList gameName="Game 3" gamePoint="3005" />
              <GameList gameName="Game 3" gamePoint="3005" />
              <GameList gameName="Game 3" gamePoint="3005" />
              <GameList gameName="Game 3" gamePoint="3005" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile;
