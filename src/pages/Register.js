import { Link } from "react-router-dom";

const Register = () => {
  //regisztráció
  const register = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
  };

  


  return (
    <div className="container">
      <div className="register__row">
        <form>
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
            <label className="register__label" htmlFor="passwordagain">
              Jelszó újra:
            </label>
            <input type="text" id="passwordagain" className="register__input" />

            <button
              type="submit"
              className="btn form__button register__button"
              onClick={register}
            >
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
