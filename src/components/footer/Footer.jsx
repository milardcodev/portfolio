import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__cotainer container">
        <h1 className="footer__title">Milard Lovina</h1>

        <h3 className="footer__subtitle">Frontend Developer</h3>

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
            <a href="#projects" className="footer__link">Projects</a>
          </li>

          <li>
            <a href="#contact" className="footer__link">Contact</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.facebook.com/profile.php?id=100006771707860" className="footer__social-link" target="_blank"><i class="uil uil-facebook-f"></i></a>  
          <a href="https://www.instagram.com/milardlovina_/" className="footer__social-link" target="_blank"><i class="uil uil-instagram"></i></a>
          <a href="https://www.linkedin.com/in/milard-lovina-58426b335/" className="footer__social-link" target="_blank"><i class="uil uil-linkedin-alt"></i></a>
          <a href="https://github.com/milardcodev" className="footer__social-link" target="_blank"><i class="uil uil-github-alt"></i></a>
        </div>
        
        <span className="footer__copy">&#169; 2024 Created by Milard Lovina. All right reserved</span>
      </div>
    </footer>
  )
}

export default Footer