import React, { useState, useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import "./portfolio.css"

import Work1 from '../../assets/work1.jpg'
import Work2 from '../../assets/work2.jpg'
import Work3 from '../../assets/work3.jpg'
import Work4 from '../../assets/work4.jpg'

const Portfolio = () => {
    const projectsData = [
        {
            id: 1,
            image: Work1,
            title: "Title 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eos ex rerum numquam qui doloremque quam consequatur aut, nesciunt tempora facilis reprehenderit porro excepturi sit esse. Odit hic dignissimos voluptate!",
            category: "web",
            link: "https://github.com/",
        },
        {
            id: 2,
            image: Work2,
            title: "Title 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eos ex rerum numquam qui doloremque quam consequatur aut, nesciunt tempora facilis reprehenderit porro excepturi sit esse. Odit hic dignissimos voluptate!",
            category: "app",
            link: "https://github.com/", 
        },
        {
            id: 3,
            image: Work3,
            title: "Title 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eos ex rerum numquam qui doloremque quam consequatur aut, nesciunt tempora facilis reprehenderit porro excepturi sit esse. Odit hic dignissimos voluptate!",
            category: "web",
            link: "https://github.com/", 
        },
        {
            id: 4,
            image: Work4,
            title: "Title 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eos ex rerum numquam qui doloremque quam consequatur aut, nesciunt tempora facilis reprehenderit porro excepturi sit esse. Odit hic dignissimos voluptate!",
            category: "app",
            link: "https://github.com/", 
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

    useEffect(() => {
        const srBottom = ScrollReveal({
          origin: 'bottom',
          distance: '80px',
          duration: 2000,
          reset: false
        });
    
        srBottom.reveal('.portfolio-title', {});
        srBottom.reveal('.portfolio-subtitle', { delay: 100 });
        srBottom.reveal('.portfolio__filters', { delay: 100 });
    
        const srLeft = ScrollReveal({
          origin: 'left',
          distance: '80px',
          duration: 2000,
          reset: false
        });
    
        srLeft.reveal('.portfolio__container', {delay: 200});
    
        return () => {
          srBottom.destroy();
          srLeft.destroy();
        };
      }, []);

    const handleClick = (e, index) => {
        setItem({name: e.target.textContent.toLowerCase()});
        setActive(index);
    };

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title portfolio-title">Portfolio</h2>
            <span className="section__subtitle portfolio-subtitle">Most recent works</span>

            <div>
                <div className="portfolio__filters">
                    {projectsNav.map((item, index) => (
                        <span onClick={(e) => handleClick(e, index)} className={`${active === index ? 'active-work' : ''} portfolio__item`} key={index}>
                            {item.name}
                        </span>
                    ))}
                </div>
                
                <div className="portfolio__container container grid">
                    {projects.map((item) => (
                        <div className="portfolio__card" key={item.id}>
                            <img src={item.image} alt="" className="portfolio__img"/>
                            <h3 className="portfolio__title">{item.title}</h3>
                            
                            <p className="portfolio__description">{item.description}</p>
                            <a href={item.link} className="portfolio__button " target='_blank'><i class="fa-brands fa-github"></i>
                                Project Repository <i className="bx bx-right-arrow-alt portfolio__button-icon"></i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio