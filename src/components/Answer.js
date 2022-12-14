import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Answer = ({ elem, id, user, questions, isLoggedIn }) => {
  let answerArray = questions[id - 1].answers;
  let getCurrentId = elem.id - 1;
  let likecount = questions[id - 1]["answers"][getCurrentId].likes;
  let dislikecount = questions[id - 1]["answers"][getCurrentId].dislikes;
  let whoLikedArray = questions[id - 1]["answers"][getCurrentId].whoLiked;
  let whoDislikedArray = questions[id - 1]["answers"][getCurrentId].whoDisliked;

  let whoLikedString = " ";
  {
    whoLikedArray.map((who) => {
      whoLikedString += who + ", ";
    });
  }

  let whoDislikedString = " ";
  {
    whoDislikedArray.map((who) => {
      whoDislikedString += who + ", ";
    });
  }

  const saveID = () => {
    localStorage.setItem("currentQuestionId", id);
  };

  const addLike = () => {
    if (isLoggedIn === "true") {
      if (whoLikedArray.includes(user)) {
        questions[id - 1]["answers"][getCurrentId].likes -= 1;
        /* questions[id - 1]["answers"][getCurrentId].whoLiked.filter(
          (userEmail) => userEmail !== user
        ); */
        questions[id - 1]["answers"][getCurrentId].whoLiked.splice(
          questions[id - 1]["answers"][getCurrentId].whoLiked.indexOf(user),
          1
        );

        localStorage.setItem("questions", JSON.stringify(questions));
        window.location.reload(false);
      } else if (whoDislikedArray.includes(user)) {
        questions[id - 1]["answers"][getCurrentId].likes += 1;
        answerArray[getCurrentId].whoLiked.push(user);
        questions[id - 1]["answers"][getCurrentId].dislikes -= 1;
        /* questions[id - 1]["answers"][getCurrentId].whoLiked.filter(
          (userEmail) => userEmail !== user
        ); */
        if (whoDislikedArray.includes(user)) {
          questions[id - 1]["answers"][getCurrentId].whoDisliked.splice(
            questions[id - 1]["answers"][getCurrentId].whoDisliked.indexOf(
              user
            ),
            1
          );
        }
        localStorage.setItem("questions", JSON.stringify(questions));
        window.location.reload(false);
      } else {
        questions[id - 1]["answers"][getCurrentId].likes += 1;
        answerArray[getCurrentId].whoLiked.push(user);
        localStorage.setItem("questions", JSON.stringify(questions));
        window.location.reload(false);
      }
    } else {
      alert("K??rlek jelentkezz be a reag??l??shoz!");
    }
  };

  const addDislike = () => {
    if (isLoggedIn === "true") {
      if (whoDislikedArray.includes(user)) {
        questions[id - 1]["answers"][getCurrentId].dislikes -= 1;
        /* questions[id - 1]["answers"][getCurrentId].whoLiked.filter(
          (userEmail) => userEmail !== user
        ); */
        questions[id - 1]["answers"][getCurrentId].whoDisliked.splice(
          questions[id - 1]["answers"][getCurrentId].whoDisliked.indexOf(user),
          1
        );

        localStorage.setItem("questions", JSON.stringify(questions));
        window.location.reload(false);
      } else if (whoLikedArray.includes(user)) {
        questions[id - 1]["answers"][getCurrentId].dislikes += 1;
        answerArray[getCurrentId].whoDisliked.push(user);
        questions[id - 1]["answers"][getCurrentId].likes -= 1;
        /* questions[id - 1]["answers"][getCurrentId].whoLiked.filter(
          (userEmail) => userEmail !== user
        ); */
        if (whoLikedArray.includes(user)) {
          questions[id - 1]["answers"][getCurrentId].whoLiked.splice(
            questions[id - 1]["answers"][getCurrentId].whoLiked.indexOf(user),
            1
          );
        }
        localStorage.setItem("questions", JSON.stringify(questions));
        window.location.reload(false);
      } else {
        questions[id - 1]["answers"][getCurrentId].dislikes += 1;
        answerArray[getCurrentId].whoDisliked.push(user);
        localStorage.setItem("questions", JSON.stringify(questions));
        window.location.reload(false);
      }
    } else {
      alert("K??rlek jelentkezz be a reag??l??shoz!");
    }
  };
  const deleteAnswer = () => {
    let result = window.confirm("Biztosan t??r??lni szeretn??d?");
    if (result) {
      answerArray.splice(getCurrentId, 1);
      answerArray.map((item) => {
        if (item.id > getCurrentId) {
          item.id--;
        }
      });
      console.log(questions);
      localStorage.setItem("questions", JSON.stringify(questions));
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
            <FontAwesomeIcon icon="thumbs-up" className="thumbs-up" />
            {!whoLikedArray.includes(user) ? (
              "Kedvelem ezt a v??laszt"
            ) : (
              <b>Kedveled ezt a v??laszt</b>
            )}
          </div>

          <span id="dislike__counter" className="dislike">
            {dislikecount}
          </span>
          <div onClick={addDislike} className="dislike__this">
            <FontAwesomeIcon icon="thumbs-up" className="thumbs-up" />
            {!whoDislikedArray.includes(user) ? (
              "Nem kedvelem ezt a v??laszt"
            ) : (
              <b>Nem kedveled ezt a v??laszt</b>
            )}
          </div>
        </div>

        {elem.whoAsked === user ? (
          <div className="answer__lower--right">
            <Link to={`/answer/${JSON.stringify(getCurrentId)}`}>
              <button className="btn form__btn" onClick={saveID}>
                M??dos??t??s
              </button>
            </Link>
            <button className="btn form__btn" onClick={deleteAnswer}>
              T??rl??s
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      {whoLikedArray.length !== 0 ? (
        <div className="whoLiked">
          Ezt a v??laszt kedveli:
          <b>{whoLikedString.substring(0, whoLikedString.length - 2)}</b>
        </div>
      ) : (
        ""
      )}
      {whoDislikedArray.length !== 0 ? (
        <div className="whoLiked">
          Ezt a v??laszt nem kedveli:
          <b>{whoDislikedString.substring(0, whoDislikedString.length - 2)}</b>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Answer;
