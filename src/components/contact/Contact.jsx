import React, { useRef, useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import "./contact.css"

import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'
import 'sweetalert2/dist/sweetalert2.css'

import { ReactComponent as Whatsapp } from '../../assets/whatsapp.svg'
import { ReactComponent as Gmail } from '../../assets/gmail.svg'
import { ReactComponent as Telegram } from '../../assets/telegram.svg'
import { ReactComponent as Send } from '../../assets/send.svg'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('', '', form.current, {
                publicKey: '',
            })
            .then(() => {
                Swal.fire({
                    title: "Success",
                    text: "Your message has been sent successfully.",
                    icon: "success",
                    customClass: {
                        confirmButton: 'swal2-confirm'
                    },
                    buttonsStyling: false
                });
                e.target.reset();
            }, (error) => {
                console.log('FAILED...', error.text);
                Swal.fire({
                    title: "Error",
                    text: "Failed to send message. Please try again.",
                    icon: "error",
                    customClass: {
                        confirmButton: 'swal2-confirm'
                    },
                    buttonsStyling: false
                });
            });
    };

    useEffect(() => {
        const srBottom = ScrollReveal({
            origin: 'bottom',
            distance: '80px',
            duration: 2000,
            reset: false
        });

        srBottom.reveal('.contact-title', {});
        srBottom.reveal('.contact-subtitle', { delay: 100 });

        const srLeft = ScrollReveal({
            origin: 'left',
            distance: '80px',
            duration: 2000,
            reset: false
        });

        srLeft.reveal('.title-info', { delay: 200 });
        srLeft.reveal('.whatsapp', { delay: 250 });
        srLeft.reveal('.email', { delay: 300 });
        srLeft.reveal('.telegram', { delay: 350 });

        const srRight = ScrollReveal({
            origin: 'right',
            distance: '80px',
            duration: 2000,
            reset: false
        });

        srRight.reveal('.title-form', { delay: 200 });
        srRight.reveal('.name-form', { delay: 250 });
        srRight.reveal('.email-form', { delay: 300 });
        srRight.reveal('.contact__form-area', { delay: 350 });
        srRight.reveal('.button-contact', { delay: 350 });

        return () =>{
            srBottom.destroy();
            srLeft.destroy();
            srRight.destroy();
        };
    }, []);
    
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title contact-title">Get in Touch</h2>
            <span className="section__subtitle contact-subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title title-info">Talk to Me</h3>

                    <div className="contact__info">
                        <a className="contact__card whatsapp" href="" target="_blank">                                
                            <div className="contact__card-holder">
                                <Whatsapp className="contact__card-icon" />

                                <div className="contact__card-info">
                                    <h3 className="contact__card-title">Whatsapp</h3>
                                    <span className="contact__card-data">+63 123456789</span>
                                    <span className="contact__card-message">Send me a Message</span>
                                </div>
                            </div>
                        </a>

                        <a className="contact__card email" href="" target="_blank">                                
                            <div className="contact__card-holder">
                                <Gmail className="contact__card-icon" />

                                <div className="contact__card-info">
                                    <h3 className="contact__card-title">Email</h3>
                                    <span className="contact__card-data">samplemail@gmail.com</span>
                                    <span className="contact__card-message">Send me a Message</span>
                                </div>
                            </div>
                        </a>

                        <a className="contact__card telegram" href="" target="_blank">                                
                            <div className="contact__card-holder">
                                <Telegram className="contact__card-icon" />

                                <div className="contact__card-info">
                                    <h3 className="contact__card-title">Telegram</h3>
                                    <span className="contact__card-data">+63 123456789</span>
                                    <span className="contact__card-message">Send me a Message</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="contact__content center-content">
                    <h3 className="contact__title title-form">Write me your project</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div name-form">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="name" className="contact__form-input" placeholder="Enter your Name" required/>
                        </div>

                        <div className="contact__form-div email-form">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name="email" className="contact__form-input" placeholder="Enter your Email" required/>
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder="Write your Project" required></textarea>
                        </div>

                        <button className="button button--flex button-contact">
                            Send Message
                            <Send />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact