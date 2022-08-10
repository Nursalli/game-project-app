import { useState } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "./components/index";
import Routes from "./Routes";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.BACKEND_BASE_URL;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        onSignOut={() => {
          setIsLoggedIn(false);
          navigate("/login");
        }}
      />
      <div className="container mt-5 mb-5">
        <div className="row justify-content-md-center">
          <Routes
            onSignIn={() => {
              setIsLoggedIn(true);
              navigate("/home");
            }}
            onSignUp={() => {
              setIsLoggedIn(true);
              navigate("/home");
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
