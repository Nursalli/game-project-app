import { Routes as ReactRoutes, Route } from "react-router-dom";
import GameDetails from "./pages/GameDetails";
import GameList from "./pages/GameList";

import Home from "./pages/HomePage/Home";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import Register from "./pages/Register";
import Profile from "./pages/ProfilePage/Profile";
import Landing from "./pages/Landing";
import Playing from "./pages/PlayingPage/Playing";

function Routes(props) {
  return (
    <ReactRoutes>
      <Route path="/games" element={<Landing />} />
      <Route path="/games/listing" element={<GameList />} />
      <Route path="/games/:gameId" element={<GameDetails />} />
      <Route path="/playing/:gameId" element={<Playing />} />
      {/* <Route path="/profile/:userId" element={<Profile />} /> */}
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login onSignIn={props.onSignIn} />} />
      <Route
        path="/register"
        element={<Register onSignUp={props.onSignUp} />}
      />
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Page404 />} />
    </ReactRoutes>
  );
}

export default Routes;
