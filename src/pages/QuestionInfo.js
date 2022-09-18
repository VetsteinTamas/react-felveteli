import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import Answer from "../components/Answer";

const QuestionInfo = ({ questions, user }) => {
  const { id } = useParams();
  let question = questions.find((question) => +question.id === +id);
  let questionArray;
  if (questions[id - 1]["answers"].length === 0) {
    questionArray = [];
  } else {
    questionArray = questions[id - 1]["answers"];
  }
  console.log(questionArray);

  const addAnswer = () => {
    let answerText = document.getElementById("answer");
    let currentId = questions[id - 1]["answers"].length + 1;
    let answer = {
      id: currentId,
      answerText: answerText.value,
      likes: 0,
      dislikes: 0,
      whoAsked: user,
    };

    questionArray.push(answer);

    let newQuestions = [...questions];
    newQuestions[id - 1]["answers"] = questionArray;
    console.log(newQuestions);

    localStorage.setItem("questions", JSON.stringify(newQuestions));
    window.location.reload(false);
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
            <p className="question__description">{question.description}</p>
          </div>
        </div>
        <div className="form__question">Válaszok</div>
        {question.answers.length === 0 ? (
          <p>Nincs válasz még</p>
        ) : (
          <>
            {question.answers.map((elem) => {
              return <Answer elem={elem} id={id} user={user} questions={questions} />;
            })}
          </>
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
