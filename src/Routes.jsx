import { Routes as ReactRoutes, Route } from 'react-router-dom';
import GameDetails from './pages/GameDetails';
import GameList from './pages/GameList';

import Home from './pages/Home';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Landing from './pages/Landing';
import Playing from './pages/Playing';

function Routes(props) {
  return (
    <ReactRoutes>
      <Route path="/games" element={<GameList />}>
        <Route path=":gameId" element={<GameDetails />} />
      </Route>
      <Route path="/playing/:gameId" element={<Playing />} />
      <Route path="/profile/:userId" element={<Profile />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login onSignIn={props.onSignIn} />} />
      <Route path="/register" element={<Register onSignUp={props.onSignUp} />} />
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Page404 />} />
    </ReactRoutes>
  )
}

export default Routes;
