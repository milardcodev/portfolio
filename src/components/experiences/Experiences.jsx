import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import "./experiences.css"

import MSWord from '../../assets/ms-word.png'
import MSExcel from '../../assets/ms-excel.png'
import MSPpt from '../../assets/ms-ppt.png'
import Tools from '../../assets/tools.png'

import HtmlIcon from '../../assets/html.png'
import CssIcon from '../../assets/css.png'
import JavaScriptIcon from '../../assets/javascript.png'

import Sheets from '../../assets/sheets.png'
import Drive from '../../assets/drive.png'

const Experiences = () => {
  useEffect(() => {
    const srBottom = ScrollReveal({
      origin: 'bottom',
      distance: '80px',
      duration: 2000,
      reset: false
    });

    srBottom.reveal('.experiences-title', {});
    srBottom.reveal('.experiences-subtitle', { delay: 100 });
    srBottom.reveal('.experience-manager', { delay: 200 });
    srBottom.reveal('.experience-developer', { delay: 300 });
    srBottom.reveal('.experience-management', { delay: 400 });

    return () => srBottom.destroy();
  }, []);

  return (
    <section className="experiences section" id="experiences">
      <h2 className="section__title experiences-title">Experiences</h2>
      <span className="section__subtitle experiences-subtitle">My Professional Journey</span>

      <div className="experiences__container container grid">
        <div className="experience__card experience-manager">
          <h3 className="experience__title">Job Title</h3>
          <span className="experience__subtitle"><span className="highlight">Company</span> | Position</span>

          <div>
            <img src={MSWord} alt="MSWORD" className="experience__icons"/>
            <img src={MSExcel} alt="MSEXCEL" className="experience__icons"/>
            <img src={MSPpt} alt="MSPPT" className="experience__icons"/>
            <img src={Tools} alt="TOOLS" className="experience__icons"/>
          </div>

          <span className="experience__date">2021 - 2024</span>
          <p className="experience__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eos ex 
            rerum numquam qui doloremque quam consequatur aut, nesciunt tempora facilis reprehenderit porro excepturi sit 
            esse. Odit hic dignissimos voluptate!
          </p>
        </div>

        <div className="experience__card experience-developer">
          <h3 className="experience__title">Job Title</h3>
          <span className="experience__subtitle"><span className="highlight">Company</span> | Position</span>

          <div>
            <img src={HtmlIcon} alt="HTML" className="experience__icons"/>
            <img src={CssIcon} alt="CSS" className="experience__icons"/>
            <img src={JavaScriptIcon} alt="JAVASCRIPT" className="experience__icons"/>
          </div>

          <span className="experience__date">2023 - 2024</span>
          <p className="experience__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eos ex 
            rerum numquam qui doloremque quam consequatur aut, nesciunt tempora facilis reprehenderit porro excepturi sit 
            esse. Odit hic dignissimos voluptate!
          </p>
        </div>

        <div className="experience__card experience-management">
          <h3 className="experience__title">Job Title</h3>
          <span className="experience__subtitle"><span className="highlight">Company</span> | Position</span>

          <div>
            <img src={Sheets} alt="SHEETS" className="experience__icons"/>
            <img src={Drive} alt="DRIVE" className="experience__icons"/>
          </div>

          <span className="experience__date">June - July 2024</span>
          <p className="experience__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eos ex 
            rerum numquam qui doloremque quam consequatur aut, nesciunt tempora facilis reprehenderit porro excepturi sit 
            esse. Odit hic dignissimos voluptate!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experiences