import {NavLink} from "react-router-dom";

import "./style.css";

const Navbar = () => {
    const activeLink = "nav-list__link--active";
    const normalLink = "nav-list__link";

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>FullStack JavaScript Developer</strong>  <br />portfolio
                    </NavLink>

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink }>
                                <strong>Home</strong>
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/Projects" className={({isActive}) => isActive ? activeLink : normalLink}>
                                <strong>Projects</strong>
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/Contacts" className={({isActive}) => isActive ? activeLink : normalLink}>
                                <strong>Contacts</strong>
                            </NavLink>
                        </li>
                    
                </ul>
            </div>
        </div>
        </nav >
    );
}
 
export default Navbar;