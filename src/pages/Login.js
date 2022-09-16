import { Link } from "react-router-dom";

const Login = () => {
  const login = () => {
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");
    console.log(storedEmail, storedPassword);
    let email = document.getElementById("emailLogin");
    let password = document.getElementById("passwordLogin");
    console.log(email, password);

    if (storedEmail === email.value && storedPassword === password.value) {
      alert("logged in");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className="container">
      <div className="register__row">
        <form>
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
              className="btn form__button register__button"
              onClick={login}
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
