import React, { useState } from "react";
import "../styles/components/navbar.css";
import SideMenu from "./SideMenu";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="navbar-main-container">
            <div className="navbar-brand">
                <div>Cycling Matchmaker</div>
            </div>
            <div onClick={toggleMenu} className="hamburger-navbar-menu-container">
                <div className="hamburger-navbar-menu"></div>
            </div>

            <SideMenu isOpen={menuOpen} onClose={toggleMenu} />
        </div>
    );
};

export default Navbar;
