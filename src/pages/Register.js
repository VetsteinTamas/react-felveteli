import { Link, useHistory } from "react-router-dom";

const Register = ({ isLoggedIn }) => {
  let history = useHistory();
  console.log(isLoggedIn);
  if (isLoggedIn === "true") {
    history.push("/myquestions");
  }

  //regisztráció
  const registration = () => {
    let users = JSON.parse(localStorage.getItem("users") || "[]");

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let user = {
      email: email.value,
      password: password.value,
    };

    users.push(user);

    console.log(users);
    console.log(users.length);

    localStorage.setItem("users", JSON.stringify(users));
    history.push("/login");
  };

  return (
    <div className="container">
      <div className="register__row">
        <form className="form" onSubmit={registration}>
          <div className="form__title">Regisztráció</div>
          <div className="form__area">
            <label className="register__label" htmlFor="email">
              E-mail cím:
            </label>
            <input className="register__input" type="email" id="email" />
            <label className="register__label" htmlFor="password">
              Jelszó:
            </label>
            <input type="password" id="password" className="register__input" />

            <button type="submit" className="btn form__button register__button">
              Regisztrálok
            </button>
            <Link to="/login">
              <p className="switcher">Inkább bejelentkezem</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
