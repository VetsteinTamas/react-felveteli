import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";

const QuestionInfo = ({ questions, user }) => {
  const { id } = useParams();
  let question = questions.find((question) => +question.id === +id);
  let questionArray = [];

  const addAnswer = () => {
    let answer = document.getElementById("answer");

    questionArray.push(answer.value);

    let newQuestions = [...questions];
    newQuestions[id - 1]["answers"] = questionArray;
    console.log(newQuestions);

    localStorage.setItem("questions", JSON.stringify(newQuestions));
  };

  

  return (
    <div className="container">
      <div className="row row__info">
        <div className="form">
          <div className="label__area label__area--info">
            <div className="labels">
              <div className="label">{question.label1}</div>
              <div className="label">{question.label2}</div>
            </div>
            <div className="question__user">
              <FontAwesomeIcon icon="user" /> {question.uploader}
            </div>
          </div>
          <div className="form__title">{question.question}</div>
          <div className="form__area">
            <p className="question__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              iste. Ea incidunt ex quasi nemo, voluptate odio animi obcaecati
              cupiditate molestiae rem fugiat minus amet nobis harum commodi
              eaque odit?t
            </p>
          </div>
        </div>
        <div className="form__question">Válaszok</div>
        {question.answers.length === 0 ? (
          <p>Nincs válasz még</p>
        ) : (
          <div className="form form__answers">xd</div>
        )}
        <div className="form form__answers">
          <h3 className="answer__title">Tudod a kérdésre a választ?</h3>
          <textarea name="answer" id="answer" cols="30" rows="8"></textarea>
          <button className="btn btn__answer" onClick={addAnswer}>
            Beküldés
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionInfo;
