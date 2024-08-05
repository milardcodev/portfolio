import React from 'react'
import "./footer.css";

const Footer = () => {
      
  return (
    <footer className="footer">
        <div className="footer__cotainer container">
            <h1 className="footer__title">John Doe</h1>

            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>

                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>

                <li>
                    <a href="#education" className="footer__link">Education</a>
                </li>

                <li>
                    <a href="#experiences" className="footer__link">Experiences</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.facebook.com/" className="footer__social-link" target='_blank'><i class="bx bxl-facebook"></i></a>
                <a href="https://www.instagram.com/" className="footer__social-link" target='_blank'><i class="bx bxl-instagram"></i></a>
                <a href="https://x.com/" className="footer__social-link" target='_blank'><i class="bx bxl-twitter"></i></a>
            </div>

            <span className="footer__copy">&#169; JohnDoe. All right reserved</span>
        </div>
    </footer>
  )
}

export default Footer