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
import AllQuestions from "./pages/AllQuestions";
import Login from "./pages/Login";
import NewQuestion from "./pages/NewQuestion";
import Register from "./pages/Register";
import QuestionInfo from "./pages/QuestionInfo";

library.add(faPlus, faUserPlus, faUser, faCopyright);

function App() {
  let questions = JSON.parse(localStorage.getItem("questions") || "[]");
  let user = localStorage.getItem("loggedInUser");
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log(isLoggedIn);

  return (
    <Router>
      <div className="App">
        <Nav isLoggedIn={isLoggedIn} user={user} />
        <Route path="/" exact component={Home} />
        <Route path="/new" exact>
          <NewQuestion user={user} />
        </Route>
        <Route path="/all" exact>
          <AllQuestions questions={questions} />
        </Route>
        <Route path="/questions/:id" exact>
          <QuestionInfo questions={questions} user={user} />
        </Route>
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
