import React, { useEffect } from 'react'
import "./experiences.css"

import ScrollReveal from 'scrollreveal'

import MSWord from '../../assets/microsoft-word.png'
import MSExcel from '../../assets/microsoft-excel.png'
import MSPpt from '../../assets/microsoft-powerpoint.png'
import Canva from '../../assets/canva.png'
import Tools from '../../assets/tools.png'

import HtmlIcon from '../../assets/html.png'
import CssIcon from '../../assets/css.png'
import JavaScriptIcon from '../../assets/javascript.png'

import Sheets from '../../assets/sheet.png'
import Drive from '../../assets/drive.png'

const Experiences = () => {
  useEffect(() => {
    const srBottom = ScrollReveal({
      origin: 'bottom',
      distance: '80px',
      duration: 1400,
      reset: false,
    });

    srBottom.reveal('.experiences-subtitle', { delay: 100 });
    srBottom.reveal('.experience-manager', { delay: 200 });
    srBottom.reveal('.experience-developer', { delay: 300 });
    srBottom.reveal('.experience-management', { delay: 400 });

    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 1400,
      reset: false,
    });

    srLeft.reveal('.experiences__divider', { delay: 100 });

    return () => {
      srBottom.destroy();
      srLeft.destroy();
    };
  }, []);

  return (
    <section className="experiences section" id="experiences">
      <h2 className="section__title">Experiences</h2>
      <div class="experiences__divider"></div>
      <span className="section__subtitle experiences-subtitle">Exploring opportunities, building skills, and achieving milestones in professional growth.</span>

      <div className="experiences__container container grid">
        <div className="experience__card experience-manager">
          <h3 className="experience__title">Center Manager</h3>
          <span className="experience__subtitle"><span className="highlight">Tech4ED</span> | Job Order</span>

          <div>
            <img src={MSWord} alt="MSWORD" className="experience__icons"/>
            <img src={MSExcel} alt="MSEXCEL" className="experience__icons"/>
            <img src={MSPpt} alt="MSPPT" className="experience__icons"/>
            <img src={Canva} alt="CANVA" className="experience__icons"/>
            <img src={Tools} alt="TOOLS" className="experience__icons"/>
          </div>

          <span className="experience__date">August 2021 - November 2024</span>
          <p className="experience__description">Oversee the day-to-day operations, ensuring that the center serves as a vital hub for technology-enabled development 
            and digital literacy. This includes conducting an 80-hour Basic Computer Literacy Training program to enhance digital skills in the community, empowering 
            individuals with essential skills for personal, academic, and professional growth.
          </p>
        </div>

        <div className="experience__card experience-developer">
          <h3 className="experience__title">Frontend Web Developer</h3>
          <span className="experience__subtitle"><span className="highlight">Bytewise</span> | Full Time</span>

          <div>
            <img src={HtmlIcon} alt="HTML" className="experience__icons"/>
            <img src={CssIcon} alt="CSS" className="experience__icons"/>
            <img src={JavaScriptIcon} alt="JAVASCRIPT" className="experience__icons"/>
          </div>

          <span className="experience__date">July 2023 - July 2024</span>
          <p className="experience__description">I create dynamic, user-friendly, and responsive web interfaces that provide an engaging user experience. I work closely 
            with design teams and back-end developers to implement visually appealing websites and web applications, ensuring they are functional, optimized, scalable, 
            and compatible across multiple devices and browsers.
          </p>
        </div>

        <div className="experience__card experience-management">
          <h3 className="experience__title">Data Management</h3>
          <span className="experience__subtitle"><span className="highlight">City Population Office</span> | Internship</span>

          <div>
            <img src={Sheets} alt="SHEETS" className="experience__icons"/>
            <img src={Drive} alt="DRIVE" className="experience__icons"/>
          </div>

          <span className="experience__date">June - July 2023</span>
          <p className="experience__description">I assisted in organizing, maintaining, and analyzing demographic data to support city planning, policies, and services. 
            My role focused on ensuring the accuracy, integrity, and consistency of population data, making it easily accessible for decision-making and contributing to 
            the efficiency of government initiatives.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experiences