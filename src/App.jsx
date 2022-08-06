import { useState } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Routes from "./Routes";
import axios from "axios";

axios.defaults.baseURL = "https://62ed0b45818ab252b60860b1.mockapi.io/";
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
