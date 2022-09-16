const NewQuestion = () => {
  return (
    <div className="container">
      <div className="row">
        <form>
          <div className="form__title">Új kérdés hozzáadása</div>
          <div className="form__area">
            <label className="form__label" htmlFor="question">
              Mi a kérdésed?
            </label>
            <input className="form__input" type="text" />
            <label htmlFor="question" className="form__label">
              Add meg a kérdésed leírását
            </label>
            <textarea
              name="question__para"
              className="form__textarea"
              cols="30"
              rows="7"
            ></textarea>
            <label className="form__label">Adj meg kettő címkét</label>
            <div className="add__label--area">
              <input type="text" className="add__label" />
              <input type="text" className="add__label" />
            </div>
            <button type="submit" className="btn form__button">
              Beküldés
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewQuestion;
