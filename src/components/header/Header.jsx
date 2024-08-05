import React, { useState, useEffect } from 'react';
import "./header.css";

import { ReactComponent as Sun } from '../../assets/sun.svg';
import { ReactComponent as Moon } from '../../assets/moon.svg';

const Header = ({ activeNav, setActiveNav }) => {
    const [Toggle, showMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('dark-mode');
        return savedTheme === 'true';
    });

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
        localStorage.setItem('dark-mode', darkMode);
    }, [darkMode]);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (window.scrollY >= 80) header.classList.add("scroll-header");
            else header.classList.remove("scroll-header");
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    };

  return (
    <header className='header'>
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Portfolio</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" onClick={() => setActiveNav('#home')} className={ activeNav === "#home" ? "nav__link active-link"
                            : "nav__link"}>
                            <i className="uil uil-estate nav__icon"></i>Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" onClick={() => setActiveNav('#about')} className={ activeNav === "#about" ? "nav__link active-link"
                            : "nav__link"}>
                            <i className="uil uil-user nav__icon"></i>About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" onClick={() => setActiveNav('#skills')} className={ activeNav === "#skills" ? "nav__link active-link"
                            : "nav__link"}>
                            <i className="uil uil-file-alt nav__icon"></i>Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#education" onClick={() => setActiveNav('#education')} className={ activeNav === "#education" ? "nav__link active-link"
                            : "nav__link"}>
                            <i className="uil uil-graduation-cap nav__icon"></i>Education
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#experiences" onClick={() => setActiveNav('#experiences')} className={ activeNav === "#experiences" ? "nav__link active-link"
                            : "nav__link"}>
                            <i className="uil uil-briefcase-alt nav__icon"></i>Experiences
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={ activeNav === "#portfolio" ? "nav__link active-link"
                            : "nav__link"}>
                            <i className="uil uil-scenery nav__icon"></i>Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" onClick={() => setActiveNav('#contact')} className={ activeNav === "#contact" ? "nav__link active-link"
                            : "nav__link"}>
                            <i className="uil uil-message nav__icon"></i>Contact
                        </a>
                    </li>

                    <li className="nav__item dark_mode">
                        <a className="nav__link">
                            <input type="checkbox" className="dark_mode_input" id="darkmode-toggle" checked={darkMode} onChange={handleDarkModeToggle} />
                            <label htmlFor="darkmode-toggle" className="dark_mode_label">
                                <Sun />
                                <Moon />
                            </label>
                        </a>
                    </li>
                </ul>

                <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>
            
            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header