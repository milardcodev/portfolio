import React, { useState, useEffect } from 'react'
import './education.css'

import ScrollReveal from 'scrollreveal'

const Education = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    useEffect(() => {
        const srBottom = ScrollReveal({
            origin: 'bottom',
            distance: '80px',
            duration: 1400,
            reset: false,
        });

        srBottom.reveal('.education-subtitle', { delay: 100 });
        srBottom.reveal('.education__tabs', { delay: 200 });

        const srLeft = ScrollReveal({
            origin: 'left',
            distance: '80px',
            duration: 1400,
            reset: false,
        });

        srLeft.reveal('.education__divider', { delay: 100 });
        srLeft.reveal('.tertiary-title', {delay: 300});
        srLeft.reveal('.tertiary-subtitle', {delay: 300});
        srLeft.reveal('.tertiary-calendar', {delay: 300});
        srLeft.reveal('.primary-title', {delay: 500});
        srLeft.reveal('.primary-calendar', {delay: 500});

        const srRight = ScrollReveal({
            origin: 'right',
            distance: '80px',
            duration: 1400,
            reset: false,
        });

        srRight.reveal('.secondary-title', {delay: 400});
        srRight.reveal('.secondary-subtitle', {delay: 400});
        srRight.reveal('.secondary-calendar', {delay: 400});

        return () => {
            srBottom.destroy();
            srLeft.destroy();
            srRight.destroy();
        };
    }, []);

  return (
    <section className="education section education__background__revert" id="education">
        <h2 className="section__title">Education</h2>
        <div class="education__divider"></div>
        <span className="section__subtitle education-subtitle">My Educational Journey</span>

        <div className="education__container container">
            <div className="education__tabs">
                <div className={toggleState === 1 ? "education__button education__active button--flex"
                    : "education__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="fa-solid fa-graduation-cap education__icon"></i>Education
                </div>

                <div className={toggleState === 2 ? "education__button education__active button--flex"
                    : "education__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="fa-solid fa-award education__icon"></i>Awards
                </div>
            </div>

            <div className="education__sections">
                <div className={toggleState === 1 ? "education__content education__content-active"
                    : "education__content"}>
                    <div className="education__data">
                        <div>
                            <h3 className="education__title tertiary-title">Eastern Samar State University - Main Campus</h3>
                            <span className="education__subtitle tertiary-subtitle">Bachelor of Science in Computer Engineering</span>
                            <div className="education__calendar tertiary-calendar">
                                <i className="uil uil-calendar-alt"></i> 2019 - 2024
                            </div>
                        </div>

                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>

                    <div className="education__data">
                        <div></div>

                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>

                        <div>
                            <h3 className="education__title secondary-title">Maydolong National High School</h3>
                            <span className="education__subtitle secondary-subtitle">Computer System Servicing</span>
                            <div className="education__calendar secondary-calendar">
                                <i className="uil uil-calendar-alt"></i> 2013 - 2019
                            </div>
                        </div>
                    </div>

                    <div className="education__data">
                        <div>
                            <h3 className="education__title tertiary-title">Maydolong National High School</h3>
                            <div className="education__calendar tertiary-calendar">
                                <i className="uil uil-calendar-alt"></i> 2007 - 2013
                            </div>
                        </div>

                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "education__content education__content-active"
                    : "education__content"}>
                    <div className="education__data">
                        <div>
                            <h3 className="education__title">Breadboarding Competition: National CpE Challenge</h3>
                            <span className="education__subtitle">Adamson University</span>
                            <span className="education__place">Metro Manila</span>
                            <div className="education__calendar">
                                <i className="uil uil-calendar-alt"></i> April 2024
                            </div>
                        </div>

                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>

                    <div className="education__data">
                        <div></div>

                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>

                        <div>
                            <h3 className="education__title">1st Place Quiz Bowl: 2023 CpE Challenge</h3>
                            <span className="education__subtitle">Samar State University</span>
                            <span className="education__place">Catbalogan City</span>
                            <div className="education__calendar">
                                <i className="uil uil-calendar-alt"></i> December 2023
                            </div>
                        </div>
                    </div>

                    <div className="education__data">
                        <div>
                            <h3 className="education__title">1st Runner Up HACKFORGOV 2023: Cyber Challenge Competition</h3>
                            <span className="education__subtitle">Eastern Visayas State University</span>
                            <span className="education__place">Tacloban City</span>
                            <div className="education__calendar">
                                <i className="uil uil-calendar-alt"></i> August 2023
                            </div>
                        </div>

                        <div>
                            <span className="education__rounder"></span>
                            <span className="education__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education