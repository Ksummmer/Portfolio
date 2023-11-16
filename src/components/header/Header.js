import "./style.css";


const Header = () => {
    return (
        <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>Hello, my name is <em>Kseniia</em></strong><br />
              I'm a Full Stack Developer
          </h1>
          <div className="header__text">
            <p>with a passion for learning and creating.</p>
          </div>
          <a href="#!" className="btn">Download CV</a>
        </div>
      </header>
      );
}
 
export default Header;