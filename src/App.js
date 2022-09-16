import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCopyright,
  faPlus,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import NewQuestion from "./pages/NewQuestion";

library.add(faPlus, faUserPlus, faUser, faCopyright);

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/new" exact component={NewQuestion} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
