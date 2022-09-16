import { Link, useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();

  const login = () => {
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    let email = document.getElementById("emailLogin");
    let password = document.getElementById("passwordLogin");

    if (storedEmail === email.value && storedPassword === password.value) {
      localStorage.setItem("isLoggedIn", true);
      history.push("");
      window.location.reload(false);
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className="container">
      <div className="register__row">
        <div className="form">
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
        </div>
      </div>
    </div>
  );
};

export default Login;
