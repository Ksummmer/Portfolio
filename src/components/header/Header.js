import React from "react";
import "./style.css";


const Header = () => {
  const onButtonClick = () => {
    const pdfUrl = "CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


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
        
        <button onClick={onButtonClick} className="btn">Download CV</button>
      </div>
    </header>
  );
}
 
export default Header;