import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Answer = ({ elem, id, user, questions }) => {
  let getCurrentId = elem.id - 1;
  let likecount = questions[id - 1]["answers"][getCurrentId].likes;
  let dislikecount = questions[id - 1]["answers"][getCurrentId].dislikes;
  let updatedQuestions = [...questions];

  const addLike = () => {
    updatedQuestions[id - 1]["answers"][getCurrentId].likes += 1;
    console.log(getCurrentId, likecount, updatedQuestions);

    localStorage.setItem("questions", JSON.stringify(updatedQuestions));
    window.location.reload(false);
  };

  const addDislike = () => {
    updatedQuestions[id - 1]["answers"][getCurrentId].dislikes += 1;
    console.log(getCurrentId, likecount, updatedQuestions);

    localStorage.setItem("questions", JSON.stringify(updatedQuestions));
    window.location.reload(false);
  };

  return (
    <div className="form form__answers">
      <div className="answer__upperarea">
        <FontAwesomeIcon icon="user" className="icon" />
        {elem.whoAsked}
      </div>
      <div className="answer__text">{elem.answerText}</div>
      <div className="answer__lowerarea">
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
    </div>
  );
};

export default Answer;
