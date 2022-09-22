import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCopyright,
  faPlus,
  faThumbsUp,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import AllQuestions from "./pages/AllQuestions";
import Login from "./pages/Login";
import NewQuestion from "./pages/NewQuestion";
import Register from "./pages/Register";
import QuestionInfo from "./pages/QuestionInfo";
import ModifyQuestion from "./pages/ModifyQuestion";
import MyQuestions from "./pages/MyQuestions";
import ModifyAnswer from "./pages/ModifyAnswer";
import LabelQuestions from "./pages/LabelQuestions";
import ProtectedRoute from "./ProtectedRoute";

library.add(faPlus, faUserPlus, faUser, faCopyright, faThumbsUp);

function App() {
  let questions = JSON.parse(localStorage.getItem("questions") || "[]");
  let user = localStorage.getItem("loggedInUser");
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log("app:", questions);

  return (
    <Router>
      <div className="App">
        <Nav isLoggedIn={isLoggedIn} user={user} />
        <Route path="/new" exact>
          <NewQuestion user={user} />
        </Route>
        <Route path="/modify" exact>
          <ModifyQuestion questions={questions} />
        </Route>
        <Route path="/labels/:label" exact>
          <LabelQuestions questions={questions} user={user} />
        </Route>
        <Route path="/answer/:id" exact>
          <ModifyAnswer questions={questions} user={user} />
        </Route>
        <Route path="/" exact>
          <AllQuestions questions={questions} user={user} />
        </Route>
        <Route path="/questions/:id" exact>
          <QuestionInfo
            questions={questions}
            user={user}
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route path="/register" exact>
          <Register component={Register} isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="/login" exact>
          <Login component={Login} isLoggedIn={isLoggedIn} />
        </Route>
        <ProtectedRoute
          path="/myquestions"
          component={MyQuestions}
          questions={questions}
          user={user}
          isLoggedIn={isLoggedIn}
        />
        {/* <Route path="/myquestions" exact>
          <MyQuestions questions={questions} user={user} />
        </Route> */}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
