import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Question = ({ question, user }) => {
  return (
    <>
      <Link
        to={`/questions/${JSON.stringify(question.id)}`}
        className="question"
      >
        <div className="label__area">
          <div className="labels">
            <div className="label">{question.label1}</div>
            <div className="label">{question.label2}</div>
          </div>
          <div className="question__user">
            <FontAwesomeIcon icon="user" /> {question.uploader}
          </div>
        </div>
        <h1 className="question__title">{question.question}</h1>
        <div className="question__lowerarea">
          <p className="question__para">
            <span className="counter">{question.answers.length}</span> válasz
          </p>
          {question.uploader === user ? (
            <p className="wasItMe">Ez a te kérdésed.</p>
          ) : (
            ""
          )}
        </div>
      </Link>
    </>
  );
};

export default Question;
