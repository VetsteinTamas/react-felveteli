import { Link, useHistory } from "react-router-dom";

const Login = ({ isLoggedIn }) => {
  let history = useHistory();
  if (isLoggedIn === "true") {
    history.push("/myquestions");
  }
  
  const login = () => {
    let users = JSON.parse(localStorage.getItem("users"));

    let email = document.getElementById("emailLogin");
    let password = document.getElementById("passwordLogin");

    users.map((element, index) => {
      console.log(typeof element.email, index);
      if (
        element.email === email.value &&
        element.password === password.value
      ) {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("loggedInUser", email.value);
        history.push("");
        window.location.reload(false);
      }
    });
  };

  return (
    <div className="container">
      <div className="register__row">
        <form className="form">
          <div className="form__title">Bejelentkezés</div>
          <div className="form__area">
            <label className="register__label" htmlFor="emailLogin">
              E-mail cím:
            </label>
            <input className="register__input" type="email" id="emailLogin" />
            <label htmlFor="passwordLogin" className="register__label">
              Jelszó:
            </label>
            <input
              type="password"
              id="passwordLogin"
              className="register__input"
            />
            <button
              type="submit"
              onClick={login}
              className="btn form__button register__button"
            >
              Bejelentkezek
            </button>
            <Link to="/register">
              <p className="switcher">Inkább regisztrálok</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
