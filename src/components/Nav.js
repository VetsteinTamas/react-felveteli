import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";

const Nav = ({ isLoggedIn, user }) => {
  const history = useHistory();
  const logout = () => {
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("loggedInUser", "");
    history.push("/");
    window.location.reload(false);
  };

  return (
    <nav>
      <div className="nav__container">
        <div className="logo__text--container">
          <Link to="/" className="link__repair">
            <h2 className="logo__text">WebOrbit</h2>
          </Link>
          <p className="logo__text--para">kérdésbank</p>
        </div>
        <ul className="nav__menu">
          <li className="nav__menu--element">
            <Link to="/">
              <button className="btn">Összes kérdés</button>
            </Link>
          </li>
          {isLoggedIn == "true" ? (
            <>
              <li className="nav__menu--element">
                <Link to="/new">
                  <button className="btn">
                    <FontAwesomeIcon icon="plus" className="icon plusicon" />
                    Tegyél fel egy kérdést
                  </button>
                </Link>
              </li>
              <li className="nav__menu--element">
                <Link to="/myquestions">
                  <button className="btn">
                    <FontAwesomeIcon icon="user-plus" className="icon" />
                    Bejelentkezve mint <b>{user}</b>
                  </button>
                </Link>
              </li>
              <li className="nav__menu--element">
                <button className="btn" onClick={logout}>
                  <FontAwesomeIcon icon="user-plus" className="icon" />
                  Kijelentkezés
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav__menu--element">
                <Link to="/register">
                  <button className="btn">
                    <FontAwesomeIcon icon="user-plus" className="icon" />
                    Regisztráció
                  </button>
                </Link>
              </li>
              <li className="nav__menu--element">
                <Link to="/login">
                  <button className="btn">
                    <FontAwesomeIcon icon="user" className="icon" />
                    Bejelentkezés
                  </button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
