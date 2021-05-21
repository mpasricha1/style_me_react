import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import BuildOutfit from "./pages/build_outfit";
import Catalogs from "./pages/catalogs";
import NewItem from "./pages/new_item";
import Social from "./pages/social";


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route exact path={["/login"]}>
          <Login />
        </Route>
        <Route exact path={["/signup"]}>
          <Signup />
        </Route>
        <Route exact path={["/buildoutfit"]}>
          <BuildOutfit />
        </Route>
        <Route exact path={["/catalogs"]}>
          <Catalogs />
        </Route>
        <Route exact path={["/item"]}>
          <NewItem />
        </Route>
        <Route exact path={["/social"]}>
          <Social />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
