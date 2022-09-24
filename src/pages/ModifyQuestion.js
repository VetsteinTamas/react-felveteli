import { useHistory, useLocation } from "react-router-dom";

const ModifyQuestion = ({ questions }) => {
  const history = useHistory();
  const location = useLocation();
  const theId = location.state?.theId;
  let question = questions[theId - 1];
  console.log(question);

  const modifyQuestion = () => {
    let questionValue = document.getElementById("question");
    let descriptionValue = document.getElementById("question__para");
    let label1Value = document.getElementById("question__label1");
    let label2Value = document.getElementById("question__label2");

    if (
      questionValue.value !== "" &&
      descriptionValue.value !== "" &&
      label1Value.value !== "" &&
      label2Value.value !== ""
    ) {
      questions[theId - 1].labels = [];
      questions[theId - 1].question = questionValue.value;
      questions[theId - 1].description = descriptionValue.value;
      questions[theId - 1].labels.push(label1Value.value);
      questions[theId - 1].labels.push(label2Value.value);

      localStorage.setItem("questions", JSON.stringify(questions));
      history.push("/");
      window.location.reload(false);
    } else {
      alert("Töltsd ki a mezőket");
    }
  };

  return (
    <div className="container">
      <div className="register__row">
        <div className="form">
          <div className="form__title">Kérdés módosítása</div>
          <div className="form__area">
            <label className="form__label" htmlFor="question">
              Mi a kérdésed?
            </label>
            <input
              className="form__input"
              placeholder={question.question}
              type="text"
              id="question"
            />
            <label htmlFor="question__para" className="form__label">
              Add meg a kérdésed leírását
            </label>
            <textarea
              name="question__para"
              className="form__textarea"
              cols="30"
              rows="7"
              placeholder={question.description}
              id="question__para"
            ></textarea>
            <label className="form__label">Adj meg kettő címkét</label>
            <div className="add__label--area">
              <input
                type="text"
                id="question__label1"
                placeholder={question.label1}
                className="add__label"
              />
              <input
                type="text"
                id="question__label2"
                placeholder={question.label2}
                className="add__label"
              />
            </div>
            <button
              type="submit"
              className="btn form__button"
              onClick={modifyQuestion}
            >
              Beküldés
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifyQuestion;
