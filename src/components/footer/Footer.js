import "./style.css";

import linkedin from "./../../img/icons/linkedIn.svg";
import github from "./../../img/icons/gitHub.svg";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item"><a href="https://linkedin.com/in/kseniia-belova-284977101"><img src={linkedin} alt="linkedinlink" /></a></li>
              <li className="social__item"><a href="https://github.com/Ksummmer"><img src={github} alt="githublink" /></a></li>
            </ul>
            <div className="copyright">
              <p>© 2023 ksummmer </p>
            </div>
          </div>
        </div>
      </footer>
      );
}
 
export default Footer;