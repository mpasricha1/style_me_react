import React, {useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signmeup";
import BuildOutfit from "./pages/build_outfit";
import Catalogs from "./pages/catalogs";
import NewItem from "./pages/new_item";
import Social from "./pages/social";
import UserContext from "./utils/UserContext";


function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState(""); 
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">  
        <Router>
          <UserContext.Provider value={{id, setId, name, setName, loggedIn, setLoggedIn}}>
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
            </UserContext.Provider>
        </Router>  
    </div>
  );
}

export default App;
