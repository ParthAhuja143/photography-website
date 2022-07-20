import React, { useState } from 'react'
import './ContactForm.css'
import Fade from 'react-reveal/Fade'
import emailjs from 'emailjs-com';
import {toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {

    const [state ,setState] = useState({
        name : '' ,
        email : '' , 
        budget : '' ,
        number : '' , 
        service : ''
    })
    const [sending , setSending] = useState(false)

    async function sendEmail(e) {
        e.preventDefault();
        console.log(e.target)
        setSending(true)
    
        await emailjs.sendForm("service_h5s38b3", 'template_c2hh16l', e.target, 'user_i9p921lkRZWFd748Ypn60')
          .then((result) => {
              console.log(result.text);
              setSending(false)
              toast("Your message has been recieved we'll get back to you soon! 📷", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
          }, (error) => {
              console.log(error.text);
          });
          setState({
            name : '' ,
            email : '' , 
            budget : '' ,
            number : '' , 
            service : ''
          })
      }

    return (
        <div className = 'contactForm_container'>
            <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            draggable
            />
            <Fade bottom>
            <div className = 'contactForm_card'>
                <div className = 'contactForm'>
                    <div className = 'contactForm_title'>Contact Us</div>
                    <div className = 'contactForm_form'>
                        <form onSubmit = {sendEmail}>
                            <div className = 'contactForm_row'>
                                <div className = 'contactForm_field'>
                                    <label for ='name'>Name *</label>
                                    <input required value = {state.name} onChange = {(e) => setState({...state , name : e.target.value})} placeholder = '  Enter your name' type="text" id = 'name' name = 'name' />
                                </div>
                                <div className = 'contactForm_field'>
                                    <label for ='service'>Services Required *</label>
                                    <input required value = {state.service} onChange = {(e) => setState({...state , service : e.target.value})} placeholder = '  Occassion' type="text" id = 'service' name = 'service' />
                                </div>
                            </div>
                            <div className = 'contactForm_row'>
                                <div className = 'contactForm_field'>
                                    <label for ='budget'>Approximate Budget *</label>
                                    <input required value = {state.budget} onChange = {(e) => setState({...state , budget : e.target.value})} placeholder = '  Enter your approximate budget' type="text" id = 'budget' name = 'budget' />
                                </div>
                                <div className = 'contactForm_field'>
                                    <label for ='email'>Email Address *</label>
                                    <input required value = {state.email} onChange = {(e) => setState({...state , email : e.target.value})} placeholder = '  Enter your email' type="email" id = 'email' name = 'email' />
                                </div>
                            </div>
                            <div className = 'contactForm_field'>
                                <label for ='number'>Your 10 Digit Mobile Number *</label>
                                <input required value = {state.number} onChange = {(e) => setState({...state , number : e.target.value})} placeholder = '  Enter your mobile no.' type="tel" id = 'number' name = 'number' />
                            </div>
                            <div className = 'contactForm'>
                                <button type = 'submit' disabled = {!(sending === false && state.email.length>0 && state.name.length>0 && state.number.length>9 && state.budget.length>0)}>
                                {sending ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <Fade right delay = {300} >
                <div className = 'contactForm_image'>
                </div>
                </Fade>
            </div>
            </Fade>
        </div>
    )
}

export default ContactForm
