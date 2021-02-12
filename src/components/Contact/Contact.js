import React from 'react';
import './Contact.scss'

const Contact = () => {
    return (
        <div className='contact'>
            <h1 className='contact__header'>JAK MĚ KONTAKTOVAT?</h1>




            <div className='contact__main'>



                <iframe className='contact__main-container' src="https://maps.google.com/maps?q=Osv%C4%9Btim&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <div className='contact__main-container'>
                    <img className='contact__main-polygon' src='/images/polygon.png' alt='polygon'/>
                    <form className='contact__main-form'>
                        <div className='contact__main-form-header'>EMAIL</div>
                        <div className='contact__main-form-inputs'>
                            <input className='contact__main-form-input' type='text' /><br />
                            <input className='contact__main-form-input' type='email' /><br />
                            <textarea className='contact__main-form-textarea' style={{resize: 'none'}}></textarea><br />
                            <input className='contact__main-form-submit' type='submit' />
                        </div>
                    </form>
                </div>


            </div>
    



            <div className='contact__socials'>
                <div className='contact__socials-container'>
                    <div className='contact__socials-header'>INSTAGRAM</div>
                    <a href='https://www.instagram.com/traplifetattoo/' className='contact__socials-content'>
                        <img className='contact__socials-content-icon' src='/images/ig-icon.png' alt='ig-icon'/>
                        <div className='contact__socials-content-link'>traplifetattoo</div>
                    </a>
                </div>
                <div className='contact__socials-container contact__socials-container-last'>
                    <div className='contact__socials-header'>FACEBOOK</div>
                    <a href='https://www.facebook.com/traphousetattoobrno' className='contact__socials-content'>
                        <img className='contact__socials-content-icon' src='/images/fb-icon.png' alt='fb-icon'/>
                        <div className='contact__socials-content-link'>traplifetattoo</div>
                    </a>
                </div>

            </div>
            <div className='contact__others'>
                <div className='contact__others-container'>
                    <img className='contact__others-icon' src='/images/email-icon.png' />
                    <div className='contact__others-text'>lorem@gmail.com</div>
                </div>
                <div className='contact__others-container'>
                    <img className='contact__others-icon' src='/images/phone-icon.png' />
                    <div className='contact__others-text'>637587254</div>
                    
                </div>
                <div className='contact__others-container'>
                    <img className='contact__others-icon' src='/images/gps-icon.png' />
                    <div className='contact__others-text'>Urbanova 37</div>
                </div>
            </div>
            <div className='contact__copyright'>© Copyright 2021</div>
        </div>
    );
};

export default Contact;