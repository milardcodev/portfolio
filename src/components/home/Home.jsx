import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import { ReactTyped } from 'react-typed'
import "./home.css"

import CV from "../../assets/Milard-Cv.pdf"
import { ReactComponent as File } from '../../assets/file.svg'
import { ReactComponent as Scroll } from '../../assets/scroll.svg'

const Home = () => {
    useEffect(() => {
        const srTop = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 2000,
            reset: false
        });

        srTop.reveal('.home__title', {});
        srTop.reveal('.home__subtitle', { delay: 100 });
        srTop.reveal('.home__social', { delay: 200 });
        srTop.reveal('.home__description', { delay: 200 });
        srTop.reveal('.button-home', { delay: 200 });
        srTop.reveal('.home__scroll', { delay: 200 });
        srTop.reveal('.home__img', { delay: 300 });

        return () => srTop.destroy();
    }, []);

  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <div className="home__social"> 
                    <a href="https://www.facebook.com/" className="home__social-icon" target='_blank'><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/" className="home__social-icon" target='_blank'><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://web.telegram.org/" className="home__social-icon" target='_blank'><i class="fa-brands fa-telegram"></i></a>
                    <a href="https://github.com/" className="home__social-icon" target='_blank'><i class="fa-brands fa-github"></i></a>
                </div>

                <div className="home__img"></div>
                
                <div className="home__data">
                    <h1 className="home__title">John Doe</h1>
                    <h3 className="home__subtitle">
                        <ReactTyped
                        strings={['Frontend Developer', 'Software Developer', 'Technical Support']}
                        typeSpeed={100}
                        backSpeed={50}
                        loop/>
                    </h3>
                    <p className="home__description">I’m a creative developer with intermediate 
                        experience in web design and other development areas.
                    </p>
                    <a download="" href={CV} className="button button--flex button-home"> Download CV
                        <File />  
                    </a>
                </div>
            </div>

            <div className="home__scroll">
                <a href="#about" className="home__scroll-button button--flex">
                    <Scroll />

                    <div class="scroll-btn">
                        <span className="home__scroll-name">Scroll Down</span>
                        <i className="uil uil-arrow-down home__scroll-arrow"></i>
                    </div>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Home