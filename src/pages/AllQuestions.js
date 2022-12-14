import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Question from "../components/Question";

const AllQuestions = ({ questions, user }) => {
  /* let questions = JSON.parse(localStorage.getItem("questions") || "[]"); */

  return (
    <div className="container">
      <div className="row">
        <div className="row__title">Minden kérdés</div>
        {questions.length === 0 ? (
          <div className="add__new">
            <p>Jelenleg nincs kérdés az adatbázisban.</p>
            <Link to="/new">Adj hozzá egyet!</Link>
          </div>
        ) : (
          questions.map((question) => {
            return (
              <Question key={question.id} question={question} user={user} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default AllQuestions;
