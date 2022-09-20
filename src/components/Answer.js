import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Answer = ({ elem, id, user, questions, isLoggedIn }) => {
  let answerArray = questions[id - 1].answers;
  let getCurrentId = elem.id - 1;
  console.log(getCurrentId);
  let likecount = questions[id - 1]["answers"][getCurrentId].likes;
  let dislikecount = questions[id - 1]["answers"][getCurrentId].dislikes;
  let updatedQuestions = [...questions];

  const addLike = () => {
    if (isLoggedIn === "true") {
      updatedQuestions[id - 1]["answers"][getCurrentId].likes += 1;
      console.log(getCurrentId, likecount, updatedQuestions);
      localStorage.setItem("questions", JSON.stringify(updatedQuestions));
      window.location.reload(false);
    } else {
      alert("Kérlek jelentkezz be a reagáláshoz!");
    }
  };

  const addDislike = () => {
    if (isLoggedIn === "true") {
      updatedQuestions[id - 1]["answers"][getCurrentId].dislikes += 1;
      console.log(getCurrentId, likecount, updatedQuestions);
      localStorage.setItem("questions", JSON.stringify(updatedQuestions));
      window.location.reload(false);
    } else {
      alert("Kérlek jelentkezz be a reagáláshoz!");
    }
  };
  const deleteAnswer = () => {
    let result = window.confirm("Biztosan törölni szeretnéd?");
    if (result) {
      answerArray.splice(getCurrentId, 1);
      answerArray.map((item) => {
        if (item.id > getCurrentId) {
          item.id--;
        }
      });
      console.log(questions);
      localStorage.setItem("questions", JSON.stringify(updatedQuestions));
      window.location.reload(false);
    }
  };

  return (
    <div className="form form__answers">
      <div className="answer__upperarea">
        <FontAwesomeIcon icon="user" className="icon" />
        {elem.whoAsked}
      </div>
      <div className="answer__text">{elem.answerText}</div>
      <div className="answer__lowerarea">
        <div className="answer__lower--left">
          <span id="like__counter" className="like">
            {likecount}
          </span>
          <div onClick={addLike} className="like__this">
            <FontAwesomeIcon icon="thumbs-up" /> Kedvelem ezt a választ
          </div>

          <span id="dislike__counter" className="dislike">
            {dislikecount}
          </span>
          <div onClick={addDislike} className="dislike__this">
            <FontAwesomeIcon icon="thumbs-up" /> Nem kedvelem ezt a választ
          </div>
        </div>
        {elem.whoAsked === user ? (
          <div className="answer__lower--right">
            <Link to={`/answer/${JSON.stringify(getCurrentId)}`}>
              <button className="btn form__btn">Módosítás</button>
            </Link>
            <button className="btn form__btn" onClick={deleteAnswer}>
              Törlés
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Answer;
