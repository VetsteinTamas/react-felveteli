import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AllQuestions = () => {
  let questions = JSON.parse(localStorage.getItem("questions") || "[]");

  return (
    <div className="container">
      <div className="row">
        <div className="row__title">Minden kérdés</div>
        {questions.length === 0 ? (
          <p>nothing</p>
        ) : (
          questions.map((element) => {
            console.log(element);
            return (
              <div className="question">
                <div className="label__area">
                  <div className="labels">
                    <div className="label">{element.label1}</div>
                    <div className="label">{element.label2}</div>
                  </div>
                  <div className="question__user">
                    <FontAwesomeIcon icon="user" /> {element.uploader}
                  </div>
                </div>
                <h1 className="question__title">{element.question}</h1>
                <p className="question__para">
                  <span className="counter">{element.answers.length}</span>{" "}
                  válasz
                </p>
              </div>
            );
          })
          /* <>
            <div className="question">
              <div className="label__area">
                <div className="labels">
                  <div className="label">videojáték</div>
                  <div className="label">szabadidő</div>
                </div>
                <div className="question__user">
                  <FontAwesomeIcon icon="user" /> BalazsTheGamer00
                </div>
              </div>
              <h1 className="question__title">
                Fifa 22-be benne lesznek a mostani új nyári igazolások
                /keretfrissítések?
              </h1>
              <p className="question__para">
                <span className="counter">8</span> válasz
              </p>
            </div>
            <div className="question">
              <div className="label__area">
                <div className="labels">
                  <div className="label">videojáték</div>
                  <div className="label">szabadidő</div>
                </div>
                <div className="question__user">
                  <FontAwesomeIcon icon="user" /> BalazsTheGamer00
                </div>
              </div>
              <h1 className="question__title">
                Fifa 22-be benne lesznek a mostani új nyári igazolások
                /keretfrissítések?
              </h1>
              <p className="question__para">
                <span className="counter">8</span> válasz
              </p>
            </div>
            <div className="question">
              <div className="label__area">
                <div className="labels">
                  <div className="label">videojáték</div>
                  <div className="label">szabadidő</div>
                </div>
                <div className="question__user">
                  <FontAwesomeIcon icon="user" /> BalazsTheGamer00
                </div>
              </div>
              <h1 className="question__title">
                Fifa 22-be benne lesznek a mostani új nyári igazolások
                /keretfrissítések?
              </h1>
              <p className="question__para">
                <span className="counter">8</span> válasz
              </p>
            </div>
            <div className="question">
              <div className="label__area">
                <div className="labels">
                  <div className="label">videojáték</div>
                  <div className="label">szabadidő</div>
                </div>
                <div className="question__user">
                  <FontAwesomeIcon icon="user" /> BalazsTheGamer00
                </div>
              </div>
              <h1 className="question__title">
                Fifa 22-be benne lesznek a mostani új nyári igazolások
                /keretfrissítések?
              </h1>
              <p className="question__para">
                <span className="counter">8</span> válasz
              </p>
            </div>
            <div className="question">
              <div className="label__area">
                <div className="labels">
                  <div className="label">videojáték</div>
                  <div className="label">szabadidő</div>
                </div>
                <div className="question__user">
                  <FontAwesomeIcon icon="user" /> BalazsTheGamer00
                </div>
              </div>
              <h1 className="question__title">
                Fifa 22-be benne lesznek a mostani új nyári igazolások
                /keretfrissítések?
              </h1>
              <p className="question__para">
                <span className="counter">8</span> válasz
              </p>
            </div>
            <div className="question">
              <div className="label__area">
                <div className="labels">
                  <div className="label">videojáték</div>
                  <div className="label">szabadidő</div>
                </div>
                <div className="question__user">
                  <FontAwesomeIcon icon="user" /> BalazsTheGamer00
                </div>
              </div>
              <h1 className="question__title">
                Fifa 22-be benne lesznek a mostani új nyári igazolások
                /keretfrissítések?
              </h1>
              <p className="question__para">
                <span className="counter">8</span> válasz
              </p>
            </div>
            <div className="question">
              <div className="label__area">
                <div className="labels">
                  <div className="label">videojáték</div>
                  <div className="label">szabadidő</div>
                </div>
                <div className="question__user">
                  <FontAwesomeIcon icon="user" /> BalazsTheGamer00
                </div>
              </div>
              <h1 className="question__title">
                Fifa 22-be benne lesznek a mostani új nyári igazolások
                /keretfrissítések?
              </h1>
              <p className="question__para">
                <span className="counter">8</span> válasz
              </p>
            </div>
            <div className="question">
              <div className="label__area">
                <div className="labels">
                  <div className="label">videojáték</div>
                  <div className="label">szabadidő</div>
                </div>
                <div className="question__user">
                  <FontAwesomeIcon icon="user" /> BalazsTheGamer00
                </div>
              </div>
              <h1 className="question__title">
                Fifa 22-be benne lesznek a mostani új nyári igazolások
                /keretfrissítések?
              </h1>
              <p className="question__para">
                <span className="counter">8</span> válasz
              </p>
            </div>
          </> */
        )}
      </div>
    </div>
  );
};

export default AllQuestions;
