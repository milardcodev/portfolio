import React, { useState, useEffect } from 'react'
import "./skills.css"

import ScrollReveal from 'scrollreveal'

import HtmlIcon from '../../assets/html.png'
import CssIcon from '../../assets/css.png'
import JavaScriptIcon from '../../assets/javascript.png'
import JavaIcon from '../../assets/java.png'
import TailwindIcon from '../../assets/tailwind.png'
import ReactJSIcon from '../../assets/react.png'
import NodeJSIcon from '../../assets/nodejs.png'
import NextJSIcon from '../../assets/next.png'
import BootstrapIcon from '../../assets/bootstrap.png'
import PhpIcon from '../../assets/php.png'
import MySqlIcon from '../../assets/mysql.png'
import LaravelIcon from '../../assets/laravel.png'
import PostgresqlIcon from '../../assets/postgresql.png'
import FirebaseIcon from '../../assets/firebase.png'
import ExpressIcon from '../../assets/express.png'

import VisualStudioCodeIcon from '../../assets/visual-studio-code.png'
import VisualStudioIcon from '../../assets/visual-studio.png'
import AndroidStudioIcon from '../../assets/android-studio.png'
import ArduinoIcon from '../../assets/arduino.png'
import RaspberryIcon from '../../assets/raspberry-pi.png'
import FigmaIcon from '../../assets/figma.png'
import GithubIcon from '../../assets/github.png'
import GitIcon from '../../assets/git.png'
import AwsIcon from '../../assets/aws.png'
import GoogleCloudIcon from '../../assets/google-cloud.png'


const Skills = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    const srBottom = ScrollReveal({
      origin: 'bottom',
      distance: '80px',
      duration: 1400,
      reset: false,
    });
    
    srBottom.reveal('.skills-subtitle', { delay: 100 });
    srBottom.reveal('.skills-html', { delay: 200 });
    srBottom.reveal('.skills-css', { delay: 250 });
    srBottom.reveal('.skills-javascript', { delay: 300 });
    srBottom.reveal('.skills-java', { delay: 350 });
    srBottom.reveal('.skills-tailwind', { delay: 400 });
    srBottom.reveal('.skills-reactjs', { delay: 450 });
    srBottom.reveal('.skills-nodejs', { delay: 500 });
    srBottom.reveal('.skills-nextjs', { delay: 550 });
    srBottom.reveal('.skills-bootstrap', { delay: 600 });
    srBottom.reveal('.skills-php', { delay: 650 });
    srBottom.reveal('.skills-mysql', { delay: 700 });
    srBottom.reveal('.skills-laravel', { delay: 750 });
    srBottom.reveal('.skills-postgresql', { delay: 800 });
    srBottom.reveal('.skills-firebase', { delay: 850 });
    srBottom.reveal('.skills-express', { delay: 900 });
    
    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 1400,
      reset: false,
    });

    srLeft.reveal('.skills__container', { delay: 100 });
    srLeft.reveal('.skills__divider', { delay: 100 });

    return () => {
      srBottom.destroy();
      srLeft.destroy();
    };
  }, []);

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <div class="skills__divider"></div>
      <span className="section__subtitle skills-subtitle">These are some of the tech stacks and tools I have learned and gained experience with.</span>
        
      <div className="skills__container container grid">
        <div className="skills__tabs">
          <div className={toggleState === 1 ? "skills__button skills__active button--flex" : "skills__button button--flex"} onClick={() => toggleTab(1)}>
            <i class="fa-light fa-code skills__icon-i"></i>
            <span className="skills__name-i">Tech Stack</span>
          </div>

          <div className={toggleState === 2 ? "skills__button skills__active button--flex" : "skills__button button--flex"} onClick={() => toggleTab(2)}>
            <i class="fa-light fa-screwdriver-wrench skills__icon-i"></i>
            <span className="skills__name-i">Tools</span>
          </div>
        </div>

        <div className="skills__sections">
          <div className={toggleState === 1 ? "skills__content skills__content-active" : "skills__content"}>
            <div className="skills__data skills-html">             
              <img src={HtmlIcon} alt="HTML" className="skills__icon" />
            
              <div>
                <h3 className="skills__name">HTML 5</h3>
                <span className="skills_level">Advanced</span>
              </div>
              <span className="tooltip-skills">HTML is the standard markup language for creating web pages.</span>
            </div>

            <div className="skills__data skills-css">
             
              <img src={CssIcon} alt="CSS" className="skills__icon" />        
              
              <div>
                <h3 className="skills__name">CSS</h3>
                <span className="skills_level">Advanced</span>
              </div>
              <span class="tooltip-skills">CSS is a language we use to style on HTML document.</span>
            </div>
            
            <div className="skills__data skills-javascript">              
              <img src={JavaScriptIcon} alt="JAVASCRIPT" className="skills__icon" />
              
              <div>
                <h3 className="skills__name">JavaScript</h3>
                <span className="skills_level">Advanced</span>
              </div>
              <span class="tooltip-skills">JavaScript is a programming langiage that can create dynamic and interactice content on web pages.</span>
            </div>

            <div className="skills__data skills-java">              
              <img src={JavaIcon} alt="JAVA" className="skills__icon" />
              
              <div>
                <h3 className="skills__name">Java</h3>
                <span className="skills_level">Basic</span>
              </div>
              <span className="tooltip-skills">Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</span>
            </div>

            <div className="skills__data skills-tailwind">             
              <img src={TailwindIcon} alt="TAILWIND" className="skills__icon" />
              
              <div>
                <h3 className="skills__name">Tailwind CSS</h3>
                <span className="skills_level">Intermediate</span>
               </div>
              <span class="tooltip-skills">Tailwind CSS is a utility-first CSS framework for building user interfaces.</span>
            </div>

            <div className="skills__data skills-reactjs">             
              <img src={ReactJSIcon} alt="REACTJS" className="skills__icon" />
              
              <div>
                <h3 className="skills__name">React JS</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <span class="tooltip-skills">React.js is a free and open-source frontend JavaScript library for building user interface based on components.</span>
            </div>

            <div className="skills__data skills-nodejs">
              <img src={NodeJSIcon} alt="NODEJS" className="skills__icon" />
              
              <div>
                <h3 className="skills__name">Node JS</h3>
                <span className="skills_level">Basic</span>
              </div>
              <span class="tooltip-skills">Node.js is a asynchronous event-driven JavaScript runtime designed to build scalable network applications.</span>
            </div>

            <div className="skills__data skills-nextjs">         
              <img src={NextJSIcon} alt="NEXTJS" className="skills__icon" />
              
              <div>
                <h3 className="skills__name">Next JS</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <span class="tooltip-skills">Next.js is a React framework that provides building blocks, features and optimizations for web applications.</span>
            </div>

            <div className="skills__data skills-bootstrap">              
              <img src={BootstrapIcon} alt="BOOTSTRAP" className="skills__icon" />
              
              <div>
                <h3 className="skills__name">Bootstrap</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <span class="tooltip-skills">Bootstrap is a component-based CSS framework that helps developers create responsive and mobile-first websites.</span>
            </div>

            <div className="skills__data skills-php">             
              <img src={PhpIcon} alt="PHP" className="skills__icon" />
              
              <div>
                <h3 className="skills__name">PHP</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <span class="tooltip-skills">PHP is a server-side scripting language design specifically for web development.</span>
            </div>

            <div className="skills__data skills-mysql">             
              <img src={MySqlIcon} alt="MYSQL" className="skills__icon" />
              
              <div>
                <h3 className="skills__name">MySQL</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <span class="tooltip-skills">MySQL is a Relational Database Management System (RDMS) that based on Structure Query Language (SQL).</span>
            </div>

            <div className="skills__data skills-laravel">             
              <img src={LaravelIcon} alt="LARAVEL" className="skills__icon" />
              
              <div>
                <h3 className="skills__name">Laravel</h3>
                <span className="skills_level">Basic</span>
              </div>
              <span class="tooltip-skills">Laravel is a PHP framework for building web applications with expressive, elegant syntax.</span>
            </div>

            <div className="skills__data skills-postgresql">              
              <img src={PostgresqlIcon} alt="POSTGRESQL" className="skills__icon" />
              
              <div>
                <h3 className="skills__name">PostgreSQL</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <span className="tooltip-skills">PostgreSQL is an open-source relational database management system emphasizing extensibility and SQL compliance.</span>
            </div>

            <div className="skills__data skills-firebase">             
              <img src={FirebaseIcon} alt="FIREBASE" className="skills__icon" />
              
              <div>
                <h3 className="skills__name">Firebase</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <span class="tooltip-skills">Firebase is a platform developed by Google. it is used to build a web and mobile applications.</span>
            </div>

            <div className="skills__data skills-express">             
              <img src={ExpressIcon} alt="EXPRESS" className="skills__icon" />
              
              <div>
                <h3 className="skills__name">Express JS</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <span class="tooltip-skills">Express.js is a user-friendly framework for developing Node applications, using JavaScript to simplify building web applications and APIs.</span>
            </div>
          </div>

          <div className={toggleState === 2 ? "skills__content skills__content-active": "skills__content"}>           
            <div className="skills__data skills-vscode">           
              <img src={VisualStudioCodeIcon} alt="VISUALSTUDIOCODE" className="skills__icon" />
              
              <div>
                <h3 className="skills__name">Visual Studio Code</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <span class="tooltip-skills">Visual Studio Code is a source-code editor made by Microsoft with Electron Framework, for Windows, Linux and macOS.</span>
            </div>

            <div className="skills__data skills-vstudio">            
              <img src={VisualStudioIcon} alt="VISUALSTUDIO" className="skills__icon" />
              
              <div>
                <h3 className="skills__name">Visual Studio</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <span className="tooltip-skills">Visual Studio is an Integrated Development Environment (IDE) by Microsoft used for developing computer programs, websites, web applications, web services, and mobile applications.</span>
            </div>

            <div className="skills__data skills-androidstudio">              
              <img src={AndroidStudioIcon} alt="ANDROIDSTUDIO" className="skills__icon" />
              
              <div>
                <h3 className="skills__name">Android Studio</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <span class="tooltip-skills">Android Studio is the official Integrated Development Environment (IDE) for Android app development.</span>
            </div>

            <div className="skills__data skills-arduino">
              <img src={ArduinoIcon} alt="ARDUINO" className="skills__icon" />
      
              <div>
                <h3 className="skills__name">Arduino</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <span class="tooltip-skills">Arduino is an open-source electronics platform that simplifies building digital devices and interactive systems for both creators and developers.</span>
            </div>

            <div className="skills__data skills-raspberry">
              <img src={RaspberryIcon} alt="RASPBERRY" className="skills__icon" />
      
              <div>
                <h3 className="skills__name">Raspberry Pi</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <span class="tooltip-skills">Raspberry Pi is a low-cost, credit card-sized single-board computer with high performance that runs Linux and can be used for learning, programming, and physical computing projects.</span>
            </div>

            <div className="skills__data skills-figma">
              <img src={FigmaIcon} alt="FIGMA" className="skills__icon" />
      
              <div>
                <h3 className="skills__name">Figma</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <span class="tooltip-skills">Figma is a web-based design and prototypeing tool that can be used to create mobile interfaces, websites, socila media post, and more.</span>
            </div>

            <div className="skills__data skills-github">             
              <img src={GithubIcon} alt="GITHUB" className="skills__icon" />
              
              <div>
                <h3 className="skills__name">Github</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <span class="tooltip-skills">Github is a web-based platform that provides a wide range of features for developers to collaborate on a software development projects.</span>
            </div>

            <div className="skills__data skills-git">
              <img src={GitIcon} alt="GIT" className="skills__icon" />
            
              <div>
                <h3 className="skills__name">Git</h3>
                <span className="skills_level">Basic</span>
              </div>
              <span class="tooltip-skills">Git is a distributed version control system that tracks changes in files, commonly used for coordinating collaborative work among programmers during software development.</span>
            </div>

            <div className="skills__data skills-aws">
              <img src={AwsIcon} alt="AWS" className="skills__icon" />

              <div>
                <h3 className="skills__name">AWS</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <span className="tooltip-skills">Amazon Web Services (AWS) is a cloud platform by Amazon offering on-demand services like computing, storage, and databases for efficient IT management.</span>
            </div>

            <div className="skills__data skills-googlecloud">
              <img src={GoogleCloudIcon} alt="Google Cloud" className="skills__icon" />

              <div>
                <h3 className="skills__name">GCP</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <span className="tooltip-skills">Google Cloud Platform (GCP) is Google's cloud service offering tools like computing, storage, databases, and machine learning online.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills