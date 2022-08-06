function Register(props) {
  return (
    <div className="border shadow rounded w-50">
      <form>
        {/* <!-- Email input --> */}
        <div className="form-outline mb-4 pt-4">
          <label className="form-label" for="form2Example1">
            Email
          </label>
          <input type="email" id="form2Example1" className="form-control" />
        </div>

        {/* <!-- First Name input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" for="form2Example1">
            First Name
          </label>
          <input type="firstname" id="form2Example1" className="form-control" />
        </div>

        {/* <!-- Last Name input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" for="form2Example1">
            Last Name
          </label>
          <input type="lastname" id="form2Example1" className="form-control" />
        </div>

        {/* <!-- Password input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" for="form2Example2">
            Password
          </label>
          <input type="password" id="form2Example2" className="form-control" />
        </div>

        {/* <!-- re-type password input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" for="form2Example2">
            Re-type Password
          </label>
          <input type="password" id="form2Example2" className="form-control" />
        </div>

        {/* <!-- Submit button --> */}
        <div className="d-flex w-100 justify-content-center">
          <button
            onClick={props.onSignUp}
            className="btn btn-primary btn-block mb-4"
          >
            Register
          </button>
        </div>
        <div className="d-flex w-100 justify-content-center">
          <button
            onClick={props.onSignIn}
            className="btn btn-primary btn-block mb-4"
          >
            (G) Sign Up with Google
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
