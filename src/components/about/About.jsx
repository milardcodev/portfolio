import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import "./about.css"

import AboutImg from "../../assets/about.png"
import { ReactComponent as Send } from '../../assets/send.svg'

const About = () => {
    useEffect(() => {
        const srBottom = ScrollReveal({
            origin: 'bottom',
            distance: '80px',
            duration: 2000,
            reset: false
        });

        srBottom.reveal('.about-title', {});
        srBottom.reveal('.about-subtitle', { delay: 100 });

        const srLeft = ScrollReveal({
            origin: 'left',
            distance: '80px',
            duration: 2000,
            reset: false
        });
        
        srLeft.reveal('.about__img', { delay: 200 });

        const srRight = ScrollReveal({
            origin: 'right',
            distance: '80px',
            duration: 2000,
            reset: false
        });

        srRight.reveal('.about__name', { delay: 300 });
        srRight.reveal('.about__subname', { delay: 350 });
        srRight.reveal('.about__description', { delay: 400 });
        srRight.reveal('.about__info', { delay: 450 });
        srRight.reveal('.about-button', { delay: 460 });

        return () => {
            srBottom.destroy();
            srLeft.destroy();
            srRight.destroy();
        };
    }, []);

  return (
    <section className="about section" id="about">
        <h1 className="section__title about-title">About Me</h1>
        <span className="section__subtitle about-subtitle">My Introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            
            <div className="about__data">
                <h3 className="about__name">I'm John</h3>
                <h4 className="about__subname">A <span className="about__position"> Frontend Developer</span> base in the<span className="about__position"> Philippines</span></h4>
                <p className="about__description">As an intermediate developer, I design and build dynamic, user-friendly 
                    applications for various platforms, creating responsive websites and intuitive mobile apps that enhance 
                    user engagement while continuously learning new technologies to develop innovative solutions that can 
                    benefit many people in the future.
                </p>
                    
                <div className="about__info grid">
                    <div className="about__box">
                        <i className="fa-solid fa-award about__icon"></i>
                        <h3 className="about__title">Experience</h3>
                        <span className="about__subtitle">4 Years Working</span>
                    </div>

                    <div className="about__box">
                        <i className="fa-solid fa-briefcase about__icon"></i>
                        <h3 className="about__title">Completed</h3>
                        <span className="about__subtitle">4 Projects</span>
                    </div>

                    <div className="about__box">
                        <i className="fa-solid fa-headphones about__icon"></i>
                        <h3 className="about__title">Support</h3>
                        <span className="about__subtitle">Online 24/7</span>
                    </div>
                </div>

                <a href="#contact" className="button button--flex about-button">
                    Contact Me
                    <Send />
                </a>
            </div>
        </div>
    </section>
  )
}

export default About