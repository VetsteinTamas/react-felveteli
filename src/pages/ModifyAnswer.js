import { useHistory, useParams } from "react-router-dom";

const ModifyAnswer = ({ questions }) => {
  const history = useHistory();
  const { id } = useParams();
  const questionIDstring = localStorage.getItem("currentQuestionId");
  const questionID = Number(questionIDstring) - 1;
  let answer = questions[questionID]["answers"][id]["answerText"];
  console.log(answer);

  const modifyAnswer = () => {
    let answerText = document.getElementById("answer");

    if (answerText.value !== "") {
      questions[questionID]["answers"][id]["answerText"] = answerText.value;
      console.log(questions);
      localStorage.setItem("questions", JSON.stringify(questions));
      history.push(`/questions/${questionID + 1}`);
      localStorage.removeItem("currentQuestionId");
      window.location.reload(false);
    }
  };

  return (
    <div className="container">
      <div className="register__row">
        <div className="form">
          <div className="form__title">Válasz módosítása</div>
          <div className="form__area">
            <label htmlFor="question__para" className="form__label">
              Add meg a módosított válaszod
            </label>
            <textarea
              name="question__para"
              className="form__textarea"
              cols="30"
              rows="7"
              placeholder={answer}
              id="answer"
            ></textarea>
            <button
              type="submit"
              onClick={modifyAnswer}
              className="btn form__button"
            >
              Beküldés
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifyAnswer;
