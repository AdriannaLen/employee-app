import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>employee management app</p>
      <ul className="footer__list">
        <li className="footer__item pink">
          <a
            href="https://www.linkedin.com/in/adrianna-lenczewska-276185287/"
            target="_blank"
            rel="noreferrer"
            className="footer__link pink"
          >
           project by Adrianna Lenczewska
          </a>
       </li>
      </ul>
      <h2>copyright 2024</h2>
    </footer>
  );
};

export default Footer;
