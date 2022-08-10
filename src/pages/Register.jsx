import useForm from "../utils/useForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Register(props) {
  const {
    handleRegister,
    email,
    setEmail,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = useForm();

  let navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, []);

  return (
    <div className="border shadow rounded w-50">
      <form onSubmit={handleRegister}>
        {/* <!-- Email input --> */}
        <div className="form-outline mb-4 pt-4">
          <label className="form-label" htmlFor="form2Example1">
            Email
          </label>
          <input
            type="email"
            id="form2Example1"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* <!-- First Name input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example1">
            First Name
          </label>
          <input
            type="firstname"
            id="form2Example1"
            value={firstName}
            className="form-control"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        {/* <!-- Last Name input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example1">
            Last Name
          </label>
          <input
            type="lastname"
            value={lastName}
            id="form2Example1"
            className="form-control"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        {/* <!-- Password input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
          <input
            type="password"
            value={password}
            id="form2Example2"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* <!-- re-type password input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Re-type Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            id="form2Example2"
            className="form-control"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>

        {/* <!-- Submit button --> */}
        <div className="d-flex w-100 justify-content-center">
          <button className="btn btn-primary btn-block mb-4">Register</button>
        </div>
        <div className="d-flex w-100 justify-content-center">
          <button className="btn btn-primary btn-block mb-4">
            (G) Sign Up with Google
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
