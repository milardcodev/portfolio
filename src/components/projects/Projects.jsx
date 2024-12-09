import React, { useEffect, useState } from 'react'
import './projects.css'

import ScrollReveal from 'scrollreveal'
import Project1 from '../../assets/project1.png'
import Project2 from '../../assets/project2.png'
import Project3 from '../../assets/project3.png'
import Project4 from '../../assets/project4.png'
import HtmlIcon from '../../assets/html.png'
import CssIcon from '../../assets/css.png'
import APIIcon from '../../assets/api.png'
import JavaIcon from '../../assets/java.png'
import ReactJSIcon from '../../assets/react.png'
import NodeJSIcon from '../../assets/nodejs.png'
import VisualStudioIcon from '../../assets/visual-studio.png'
import AndroidStudioIcon from '../../assets/android-studio.png'
import RaspberryIcon from '../../assets/raspberry-pi.png'
import FigmaIcon from '../../assets/figma.png'
import CSharpIcon from '../../assets/c-sharp.png'
import TypeScriptIcon from '../../assets/typescript.png'
import ViteIcon from '../../assets/vite.png'
import TailwindIcon from '../../assets/tailwind.png'

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      image: Project1,
      title: "Portfolio",
      description: "This personal project, developed using React JS and CSS, showcases a dynamic website that reflects my professional journey and expertise. Designed to be responsive and interactive, it aims to make a lasting impression on potential clients and collaborators by presenting my skills and achievements in an engaging way.",
      category: "web",
      tools: [HtmlIcon, CssIcon, ReactJSIcon, NodeJSIcon, FigmaIcon], 
      site: "https://portfolio-milardlovina.vercel.app/",
      code: "https://github.com/milardcodev/portfolio",
    },
    {
      id: 2,
      image: Project2,
      title: "SkyCast",
      description: "A weather forecast using Weather API to deliver real-time updates, offering a 5-day forecast, air quality, humidity, pressure, and more. Users can access weather data for their current location or any searched city. Fully responsive, it ensures a smooth experience across both mobile and desktop devices.",
      category: "web",
      tools: [HtmlIcon, TailwindIcon, ReactJSIcon, NodeJSIcon, TypeScriptIcon, ViteIcon, APIIcon], 
      site: "https://skycast-milardlovina.vercel.app/",
      code: "https://github.com/milardcodev/skycast", 
    },
    {
      id: 3,
      image: Project3,
      title: "Kiosk Printing Machine",
      description: "This capstone project is a self-service device that enables users to print documents in formats like Word, Excel, PowerPoint, and PDF. It includes a payment system, flash drive authentication, and document selection, all controlled by a Raspberry Pi, ensuring efficient communication and a user-friendly printing experience.",
      category: "app",
      tools: [VisualStudioIcon, CSharpIcon, RaspberryIcon, FigmaIcon],  
      code: "https://github.com/milardcodev/kiosk-printing-machine", 
    },
    {
      id: 4,
      image: Project4,
      title: "MuVi Player",
      description: "A versatile media player for music and videos, featuring an intuitive interface for easy media management. It supports various audio and video formats, ensuring compatibility with your library. Key features include playlist creation and customizable playback settings, making it perfect for all your entertainment needs.",
      category: "app",
      tools: [AndroidStudioIcon, JavaIcon, FigmaIcon], 
      code: "https://github.com/milardcodev/muvi-player", 
    },
  ];

  const projectsNav = [
    {
      name: 'all',
    },
    {
      name: 'web',
    },
    {
      name: 'app',
    },
  ];

  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
        setProjects(projectsData);
    } else {
        const newProjects = projectsData.filter((project) => {
            return project.category.toLowerCase() === item.name;
        });
        setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({name: e.target.textContent.toLowerCase()});
    setActive(index);
  };

  useEffect(() => {
    const srBottom = ScrollReveal({
      origin: 'bottom',
      distance: '80px',
      duration: 1400,
      reset: false,
    });
  
    srBottom.reveal('.projects-subtitle', { delay: 100 });
    srBottom.reveal('.projects__filters', { delay: 200 });
  
    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 1400,
      reset: false,
    });
  
    srLeft.reveal('.projects__divider', { delay: 100 });
    srLeft.reveal('.projects__container', { delay: 200 });
  
    return () => {
      srBottom.destroy();
      srLeft.destroy();    
    };
  }, []);  

  return (
    <section className="projects section projects__background" id="projects">
      <h1 className="section__title">Projects</h1>
      <div className="projects__divider"></div>
      <span className="section__subtitle projects-subtitle">This collection features my academic and personal projects.</span>
      
      <div>
        <div className="projects__filters">
          {projectsNav.map((item, index) => (
            <span onClick={(e) => handleClick(e, index)} className={`${active === index ? 'active-work' : ''} portfolio__item`} key={index}>
              {item.name}
            </span>
          ))}
        </div>

        <div className="projects__container container grid">
          {projects.map((item) => (
            <div className="projects__card" key={item.id}>
              <img src={item.image} alt="" className="projects__img"/>
              <h3 className="projects__title">{item.title}</h3>
              <p className="projects__description">{item.description}</p>
              
              <div className="projects__tools">
                {item.tools.map((tool, index) => (
                  <img src={tool} alt={`Tool ${index + 1}`} key={index} className="projects__tool-icon" />
                ))}
              </div>

              <div className="projects__buttons">
                {item.site && (
                  <a href={item.site} className="projects__site" target='_blank'>
                    <i className="uil uil-link-alt projects__site-icon"></i>
                    <span className="projects__site-name">View Site</span>
                  </a>
                )}
                
                <a href={item.code} className="projects__code" target='_blank'>
                  <i className="uil uil-github-alt projects__code-icon"></i>
                  <span className="projects__code-name">View Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects