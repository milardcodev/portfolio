import React, { useEffect } from 'react'
import './about.css'

import 'swiper/css'
import 'swiper/css/effect-cards'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules'

import ScrollReveal from 'scrollreveal'
import Image1 from "../../assets/about1.JPG"
import Image2 from '../../assets/about2.JPG'
import Image3 from '../../assets/about3.JPG'

const About = () => {
  useEffect(() => {
    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 1400,
      reset: false, 
    });

    srLeft.reveal('.about__divider', { delay: 100 });
    srLeft.reveal('.img', { delay: 200 });

    const srRight = ScrollReveal({
      origin: 'right',
      distance: '80px',
      duration: 1400,
      reset: false, 
    });

    srRight.reveal('.paragraph_one', { delay: 250 });
    srRight.reveal('.paragraph_two', { delay: 300 });
    srRight.reveal('.paragraph_three', { delay: 350 });

    return () => {
      srLeft.destroy();
      srRight.destroy();
  };
  }, []);

  return (
    <section className="about section about__background" id="about">
      <h1 className="section__title">Personal Details</h1>
      <div class="about__divider"></div>

      <div className="about__container container grid">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="img">
          <SwiperSlide>
            <img src={Image1} alt="" className="about__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image2} alt="" className="about__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image3} alt="" className="about__img" />
          </SwiperSlide>
        </Swiper>
        
        <div className="about__data">
          <p className="about__description paragraph_one"> I am Milard, a passionate <span className="about__highlight"> Frontend Web Developer</span> who specializes in 
            creating responsive, interactive, and visually appealing websites and applications. I have intermediate experience in web design and a deep 
            understanding of both <span className="about__highlight"> software</span> and <span className="about__highlight"> hardware</span> development.
          </p>

          <p className="about__description paragraph_two">My expertise spans in a wide range of frontend technologies, including <span className="about__highlight"> HTML, CSS, JavaScript, React, </span> 
            and various other libraries and frameworks. I also have extensive knowledge in<span className="about__highlight"> UI</span> and<span className="about__highlight"> UX</span> design, which allows 
            me to bring dynamic interfaces to life.
          </p>

          <p className="about__description paragraph_three">I actively seek new ways to enhance my skills and stay updated with industry trends and emerging technologies. 
            I <span className="about__highlight"> continuously adapt</span> and<span className="about__highlight"> learn new technologies</span> to develop innovative solutions 
            that benefit a wide range of users.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About