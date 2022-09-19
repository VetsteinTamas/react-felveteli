import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Question from "./Question";

const Home = ({ questions, user }) => {

  return (
    <div className="container">
      <div className="row">
        <div className="row__title">Népszerű kérdések</div>
        {questions.length === 0 ? (
          <>
            <p>Jelenleg nincs kérdés az adatbázisban.</p>
            <Link to="/new">Adj hozzá egyet!</Link>
          </>
        ) : (
          questions.map((question) => {
            return <Question question={question} user={user} />;
          })
        )}
      </div>
    </div>
  );
};

export default Home;
