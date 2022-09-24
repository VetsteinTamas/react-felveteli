import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";

const Nav = ({ isLoggedIn, user }) => {
  const history = useHistory();

  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

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
              <button className="btn__menu" onClick={openMenu}>
                <FontAwesomeIcon icon="bars" />
              </button>
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
              <button className="btn__menu" onClick={openMenu}>
                <FontAwesomeIcon icon="bars" />
              </button>
            </>
          )}
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          {isLoggedIn === "true" ? (
            <ul className="menu__links">
              <li className="menu__list">
                <Link to="/" className="menu__link">
                  <button className="btn">Összes kérdés</button>
                </Link>
              </li>
              <li className="menu__list">
                <Link to="/new" className="menu__link">
                  <button className="btn">
                    <FontAwesomeIcon icon="plus" className="icon plusicon" />
                    Tegyél fel egy kérdést
                  </button>
                </Link>
              </li>
              <li className="menu__list">
                <Link to="/myquestions" className="menu__link">
                  <button className="btn">
                    <FontAwesomeIcon icon="user-plus" className="icon" />
                    Bejelentkezve mint <b>{user}</b>
                  </button>
                </Link>
              </li>
              <li className="menu__list">
                <button className="btn" onClick={logout}>
                  <FontAwesomeIcon icon="user-plus" className="icon" />
                  Kijelentkezés
                </button>
              </li>
            </ul>
          ) : (
            <ul className="menu__links">
              <li className="menu__list">
                <Link to="/" className="menu__link">
                  <button className="btn">Összes kérdés</button>
                </Link>
              </li>
              <li className="menu__list">
                <Link to="/register" className="menu__link">
                  <button className="btn">
                    <FontAwesomeIcon icon="user-plus" className="icon" />
                    Regisztráció
                  </button>
                </Link>
              </li>
              <li className="menu__list">
                <Link to="/login" className="menu__link">
                  <button className="btn">
                    <FontAwesomeIcon icon="user" className="icon" />
                    Bejelentkezés
                  </button>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
