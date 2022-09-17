const NewQuestion = ({ user }) => {
  const addQuestion = () => {
    let questions = JSON.parse(localStorage.getItem("questions") || "[]");

    let question = document.getElementById("question");
    let description = document.getElementById("question__para");
    let label1 = document.getElementById("question__label1");
    let label2 = document.getElementById("question__label2");

    let newQuestion = {
      id: questions.length + 1,
      question: question.value,
      description: description.value,
      label1: label1.value,
      label2: label2.value,
      answers: [],
      uploader: user,
    };

    questions.push(newQuestion);

    localStorage.setItem("questions", JSON.stringify(questions));
  };

  return (
    <div className="container">
      <div className="register__row">
        <div className="form">
          <div className="form__title">Új kérdés hozzáadása</div>
          <div className="form__area">
            <label className="form__label" htmlFor="question">
              Mi a kérdésed?
            </label>
            <input className="form__input" type="text" id="question" />
            <label htmlFor="question__para" className="form__label">
              Add meg a kérdésed leírását
            </label>
            <textarea
              name="question__para"
              className="form__textarea"
              cols="30"
              rows="7"
              id="question__para"
            ></textarea>
            <label className="form__label">Adj meg kettő címkét</label>
            <div className="add__label--area">
              <input type="text" id="question__label1" className="add__label" />
              <input type="text" id="question__label2" className="add__label" />
            </div>
            <button
              type="submit"
              className="btn form__button"
              onClick={addQuestion}
            >
              Beküldés
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewQuestion;
