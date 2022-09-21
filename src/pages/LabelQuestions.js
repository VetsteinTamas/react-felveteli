import { Link, useParams } from "react-router-dom";
import Question from "../components/Question";

const LabelQuestions = ({ questions, user }) => {
  const { label } = useParams();
  return (
    <div className="container">
      <div className="row">
        <div className="row__title">
          Minden {label} cimkével ellátott kérdés
        </div>
        {questions.length === 0 ? (
          <>
            <p>Jelenleg nincs kérdés az adatbázisban.</p>
            <Link to="/new">Adj hozzá egyet!</Link>
          </>
        ) : (
          questions.map((question) => {
            return question.labels.map((labelText) => {
              if (`"${labelText}"` === label) {
                return <Question question={question} user={user} />;
              }
            });
          })
        )}
      </div>
    </div>
  );
};

export default LabelQuestions;
