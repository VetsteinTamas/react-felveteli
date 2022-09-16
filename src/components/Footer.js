import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <p>
          {" "}
          2022 <FontAwesomeIcon icon="copyright" /> Vetstein Tamás
        </p>
        <p>Felvételi feladat</p>
      </div>
    </footer>
  );
};

export default Footer;
