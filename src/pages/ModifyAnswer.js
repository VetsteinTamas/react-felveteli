import { useHistory, useLocation, useParams } from "react-router-dom";

const ModifyAnswer = ({ questions }) => {
  const { id } = useParams();
  console.log(questions);
  console.log(id);
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
              /* placeholder={question.description} */
              id="answer"
            ></textarea>
            <button type="submit" className="btn form__button">
              Beküldés
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifyAnswer;
