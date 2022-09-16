import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCopyright,
  faPlus,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import NewQuestion from "./pages/NewQuestion";
import Register from "./pages/Register";

library.add(faPlus, faUserPlus, faUser, faCopyright);

function App() {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log(isLoggedIn);

  return (
    <Router>
      <div className="App">
        <Nav isLoggedIn={isLoggedIn} />
        <Route path="/" exact component={Home} />
        <Route path="/new" exact component={NewQuestion} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
