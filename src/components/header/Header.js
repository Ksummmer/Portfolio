import React from "react";
import "./style.css";


const Header = () => {
  const onButtonClick = () => {
    const pdfUrl = "Portfolio/public/CV.pdf";
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
          <strong>Hello, I'm Kseniia </strong><br />
          Welcome to my portfolio

          
        </h1>
        <div className="header__text">
          <p>I'm a Fullstack JavaScript Web-Developer, 
          <br />based in Germany and looking for new job opprtunities.</p>
        </div>
        
        <button onClick={onButtonClick} className="btn">Download CV</button>
      </div>
    </header>
  );
}
 
export default Header;