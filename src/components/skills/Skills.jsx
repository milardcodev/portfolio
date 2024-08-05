import React, { useState, useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import "./skills.css"

import HtmlIcon from '../../assets/html.png'
import CssIcon from '../../assets/css.png'
import JavaScriptIcon from '../../assets/javascript.png'
import ReactJSIcon from '../../assets/react_js.png'
import NextJSIcon from '../../assets/next_js.png'
import TailwindIcon from '../../assets/tailwind.png'
import NodeJSIcon from '../../assets/node_js.png'
import BootstrapIcon from '../../assets/bootstrap.png'
import JavaIcon from '../../assets/java.png'
import PhpIcon from '../../assets/php.png'
import LaravelIcon from '../../assets/laravel.png'
import MySqlIcon from '../../assets/my_sql.png'
import PostgresqlIcon from '../../assets/postgresql.png'
import FirebaseIcon from '../../assets/firebase.png'

import VisualStudioCodeIcon from '../../assets/visual_studio_code.png'
import VisualStudioIcon from '../../assets/visual_studio.png'
import AndroidStudioIcon from '../../assets/android_studio.png'
import AwsIcon from '../../assets/aws.png'
import FigmaIcon from '../../assets/figma.png'
import GithubIcon from '../../assets/github.png'
import XamppIcon from '../../assets/xampp.png'
import GitIcon from '../../assets/git.png'

const Skills = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    useEffect(() => {
        const srBottom = ScrollReveal({
            origin: 'bottom',
            distance: '80px',
            duration: 2000,
            reset: false
        });

        srBottom.reveal('.skills-title', {});
        srBottom.reveal('.skills-subtitle', { delay: 100 });

        srBottom.reveal('.skills-html', { delay: 200 });
        srBottom.reveal('.skills-css', { delay: 250 });
        srBottom.reveal('.skills-javascript', { delay: 300 });
        srBottom.reveal('.skills-reactjs', { delay: 350 });
        srBottom.reveal('.skills-nextjs', { delay: 400 });
        srBottom.reveal('.skills-tailwind', { delay: 450 });
        srBottom.reveal('.skills-bootstrap', { delay: 500 });
        srBottom.reveal('.skills-nodejs', { delay: 550 });
        srBottom.reveal('.skills-java', { delay: 600 });
        srBottom.reveal('.skills-php', { delay: 650 });
        srBottom.reveal('.skills-laravel', { delay: 700 });
        srBottom.reveal('.skills-mysql', { delay: 750 });
        srBottom.reveal('.skills-postgresql', { delay: 800 });
        srBottom.reveal('.skills-firebase', { delay: 850 });

        const srLeft = ScrollReveal({
            origin: 'left',
            distance: '80px',
            duration: 2000,
            reset: false
        });

        srLeft.reveal('.skills__container', { delay: 100 });

        return () => {
            srBottom.destroy();
            srLeft.destroy();
        };
    }, []);

  return (
    <section className="skills section" id="skills">
        <h2 className="section__title skills-title">Skills</h2>
        <span className="section__subtitle skills-subtitle">Technical Proficiency Breakdown</span>
        
        <div className="skills__container container grid">
            <div className="skills__tabs">
                <div className={toggleState === 1 ? "skills__button skills__active button--flex"
                    : "skills__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="fa-solid fa-code skills__icon-i"></i>Tech Stack
                </div>

                <div className={toggleState === 2 ? "skills__button skills__active button--flex"
                    : "skills__button button--flex"} onClick={() => toggleTab(2)}>
                    <i class="fa-solid fa-screwdriver-wrench skills__icon-i"></i>Tools
                </div>
            </div>

            <div className="skills__sections">
                <div className={toggleState === 1 ? "skills__content skills__content-active"
                    : "skills__content"}>
            
                    <div className="skills__data skills-html">
                        <div className="skills__circle">
                            <img src={HtmlIcon} alt="HTML" className="skills__icon" />
                        </div>

                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills_level">Advanced</span>
                        </div>
                        <span className="tooltip-skills">HTML is the standard markup language for creating web pages.</span>
                    </div>

                    <div className="skills__data skills-css">
                        <div className="skills__circle">
                            <img src={CssIcon} alt="CSS" className="skills__icon" />        
                        </div>

                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills_level">Advanced</span>
                        </div>
                        <span class="tooltip-skills">CSS is a language we use to style on HTML document.</span>
                    </div>

                        

                    <div className="skills__data skills-javascript">
                        <div className="skills__circle">
                            <img src={JavaScriptIcon} alt="JAVASCRIPT" className="skills__icon" />
                        </div>

                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills_level">Advanced</span>
                        </div>
                        <span class="tooltip-skills">JavaScript is a programming langiage that can create dynamic and interactice content on web pages.</span>
                    </div>

                    <div className="skills__data skills-reactjs">
                        <div className="skills__circle">
                            <img src={ReactJSIcon} alt="REACTJS" className="skills__icon" />
                        </div>

                        <div>
                            <h3 className="skills__name">React JS</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <span class="tooltip-skills">ReactJS is a free and open-source frontend JavaScript library for building user interface based on components.</span>
                    </div>

                    <div className="skills__data skills-nextjs">
                        <div className="skills__circle">
                            <img src={NextJSIcon} alt="NEXTJS" className="skills__icon" />
                        </div>

                        <div>
                            <h3 className="skills__name">Next JS</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <span class="tooltip-skills">Next.js is a React framework that provides building blocks, features and optimizations for web applications.</span>
                    </div>

                    <div className="skills__data skills-tailwind">
                        <div className="skills__circle">
                            <img src={TailwindIcon} alt="TAILWIND" className="skills__icon" />
                        </div>

                        <div>
                            <h3 className="skills__name">Tailwind CSS</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <span class="tooltip-skills">Tailwind CSS is a utility-first CSS framework for building user interfaces.</span>
                    </div>

                    <div className="skills__data skills-bootstrap">
                        <div className="skills__circle">
                            <img src={BootstrapIcon} alt="BOOTSTRAP" className="skills__icon" />
                        </div>

                        <div>
                            <h3 className="skills__name">Bootstrap</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <span class="tooltip-skills">Bootstrap is a component-based CSS framework that helps developers create responsive and mobile-first websites.</span>
                    </div>

                    <div className="skills__data skills-nodejs">
                        <div className="skills__circle">    
                            <img src={NodeJSIcon} alt="NODEJS" className="skills__icon" />
                        </div>

                        <div>
                            <h3 className="skills__name">Node Js</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                        <span class="tooltip-skills">Node.js is a asynchronous event-driven JavaScript runtime designed to build scalable network applications.</span>
                    </div>

                    <div className="skills__data skills-java">
                        <div className="skills__circle">
                            <img src={JavaIcon} alt="JAVA" className="skills__icon" />
                        </div>

                        <div>
                            <h3 className="skills__name">Java</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                        <span className="tooltip-skills">Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</span>
                    </div>

                    <div className="skills__data skills-php">
                        <div className="skills__circle">
                            <img src={PhpIcon} alt="PHP" className="skills__icon" />
                        </div>

                        <div>
                            <h3 className="skills__name">PHP</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <span class="tooltip-skills">PHP is a server-side scripting language design specifically for web development.</span>
                    </div>

                    <div className="skills__data skills-laravel">
                        <div className="skills__circle">
                            <img src={LaravelIcon} alt="LARAVEL" className="skills__icon" />
                        </div>

                        <div>
                            <h3 className="skills__name">Laravel</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                        <span class="tooltip-skills">Laravel is a PHP framework for building web applications with expressive, elegant syntax.</span>
                    </div>

                    <div className="skills__data skills-mysql">
                        <div className="skills__circle">
                            <img src={MySqlIcon} alt="MYSQL" className="skills__icon" />
                        </div>

                        <div>
                            <h3 className="skills__name">MySQL</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <span class="tooltip-skills">MySQL is a Relational Database Management System (RDMS) that based on Structure Query Language (SQL).</span>
                    </div>

                    <div className="skills__data skills-postgresql">
                        <div className="skills__circle">
                            <img src={PostgresqlIcon} alt="POSTGRESQL" className="skills__icon" />
                        </div>

                        <div>
                            <h3 className="skills__name">PostgreSQL</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <span className="tooltip-skills">PostgreSQL is an open-source relational database management system emphasizing extensibility and SQL compliance.</span>
                    </div>

                    <div className="skills__data skills-firebase">
                        <div className="skills__circle">
                            <img src={FirebaseIcon} alt="FIREBASE" className="skills__icon" />
                        </div>

                        <div>
                            <h3 className="skills__name">Firebase</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <span class="tooltip-skills">Firebase is a platform developed by Google. it is used to build a web and mobile applications.</span>
                    </div>
                </div>

                <div className={toggleState === 2 ? "skills__content skills__content-active"
                    : "skills__content"}>
                        
                    <div className="skills__data skills-vscode">
                        <div className="skills__circle">
                            <img src={VisualStudioCodeIcon} alt="VISUALSTUDIOCODE" className="skills__icon" />
                        </div>

                        <div>
                            <h3 className="skills__name">Visual Studio Code</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <span class="tooltip-skills">Visual Studio Code is a source-code editor made by Microsoft with Electron Framework, for Windows, Linux and macOS.</span>
                    </div>

                    <div className="skills__data skills-visualstudio">
                        <div className="skills__circle">
                            <img src={VisualStudioIcon} alt="VISUALSTUDIO" className="skills__icon" />
                        </div>

                        <div>
                            <h3 className="skills__name">Visual Studio</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <span className="tooltip-skills">Visual Studio is an integrated development environment (IDE) from Microsoft used to develop computer programs, as well as websites, web applications, web services, and mobile applications.</span>
                    </div>

                    <div className="skills__data skills-androidstudio">
                        <div className="skills__circle">
                            <img src={AndroidStudioIcon} alt="ANDROIDSTUDIO" className="skills__icon" />
                        </div>

                        <div>
                            <h3 className="skills__name">Android Studio</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <span class="tooltip-skills">Android Studio is the official Integrated Development Environment (IDE) for Android app development.</span>
                    </div>

                    <div className="skills__data skills-aws">
                        <div className="skills__circle">
                            <img src={AwsIcon} alt="AWS" className="skills__icon" />
                        </div>

                        <div>
                            <h3 className="skills__name">Amazon Web Services</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <span className="tooltip-skills">Amazon Web Services (AWS) is a comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally.</span>
                    </div>

                    <div className="skills__data skills-figma">
                        <div className="skills__circle">
                            <img src={FigmaIcon} alt="FIGMA" className="skills__icon" />
                        </div>

                        <div>
                            <h3 className="skills__name">Figma</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <span class="tooltip-skills">Figma is a web-based design and prototypeing tool that can be used to create mobile interfaces, websites, socila media post, and more.</span>
                    </div>

                    <div className="skills__data skills-github">
                        <div className="skills__circle">
                            <img src={GithubIcon} alt="GITHUB" className="skills__icon" />
                        </div>

                        <div>
                            <h3 className="skills__name">Github</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <span class="tooltip-skills">Github is a web-based platform that provides a wide range of features for developers to collaborate on a software development projects.</span>
                    </div>

                    <div className="skills__data skills-xampp">
                        <div className="skills__circle">
                            <img src={XamppIcon} alt="XAMPP" className="skills__icon" />
                        </div>

                        <div>
                            <h3 className="skills__name">XAMPP</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                        <span class="tooltip-skills">XAMPP is a free and open-source development environment that allows developers to create and test web applications to ttheir local machines.</span>
                    </div>

                    <div className="skills__data skills-git">
                        <div className="skills__circle">
                            <img src={GitIcon} alt="GIT" className="skills__icon" />
                        </div>

                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                        <span class="tooltip-skills">Git is a distributed version control system that tracks changes in any set of computer file, usually used for coodinating work among programmers collaboratively
                            developing source code during software development.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills