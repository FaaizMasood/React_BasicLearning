//import logo from './logo.svg';
import "./App.css";
// route component -> we use it to define different paths in the url we want to listen and which component we want to load
// Switch -> one of the pages should be rendered
import { Route, Switch } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetup from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  // domain = local:3000 .... mypage.com ... path starts with '/' ..... mypage.com/****/
  return (
    <h1>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
      </Switch>
    </h1>
  );
}

export default App;
