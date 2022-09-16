import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCopyright,
  faPlus,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

library.add(faPlus, faUserPlus, faUser, faCopyright);

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
