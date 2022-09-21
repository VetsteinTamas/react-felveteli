import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Label from "./Label";

const Question = ({ question, user }) => {
  let labelArray = question.labels;
  console.log(labelArray);

  return (
    <>
      <Link
        to={`/questions/${JSON.stringify(question.id)}`}
        className="question"
      >
        <div className="label__area">
          <div className="labels">
            {labelArray.map((label) => {
              return <Label  question={question} label={label} />;
            })}
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
