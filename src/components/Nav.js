import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <div className="logo__text--container">
          <h2 className="logo__text">WebOrbit</h2>
          <p className="logo__text--para">kérdésbank</p>
        </div>
        <ul className="nav__menu">
          <li className="nav__menu--element">
            <Link to="/new">
              <button className="btn">
                <FontAwesomeIcon icon="plus" className="icon plusicon" />
                Tegyél fel egy kérdést
              </button>
            </Link>
          </li>
          <li className="nav__menu--element">
            <button className="btn">
              <FontAwesomeIcon icon="user-plus" className="icon" />
              Regisztráció
            </button>
          </li>
          <li className="nav__menu--element">
            <button className="btn">
              <FontAwesomeIcon icon="user" className="icon" />
              Bejelentkezés
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
