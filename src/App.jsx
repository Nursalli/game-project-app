import { useState } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom'

import Navbar from './components/Navbar';
import Routes from './Routes';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        onSignOut={() => {
          setIsLoggedIn(false);
          navigate('/login');
        }}
      />
      <div className="container mt-5 mb-5">
        <div className="row justify-content-md-center">
          <Routes
            onSignIn={() => {
              setIsLoggedIn(true);
              navigate('/home');
            }}
            onSignUp={() => {
              setIsLoggedIn(true);
              navigate('/home');
            }}
          />
        </div>
      </div>
    </>
  )
}

export default App;
