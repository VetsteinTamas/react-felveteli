import { Link } from "react-router-dom";
import Question from "../components/Question";

const MyQuestions = ({ questions, user }) => {
  let myQuestionsArray = questions.filter(
    (question) => question.uploader === user
  );
  console.log(myQuestionsArray);

  return (
    <div className="container">
      <div className="row">
        <div className="row__title">Saját kérdéseim</div>
        {myQuestionsArray.length === 0 ? (
          <>
            <p>Jelenleg nincs kérdésed az adatbázisban.</p>
            <Link to="/new">Adj hozzá egyet!</Link>
          </>
        ) : (
          myQuestionsArray.map((question) => {
            return <Question question={question} user={user} />;
          })
        )}
      </div>
    </div>
  );
};

export default MyQuestions;
