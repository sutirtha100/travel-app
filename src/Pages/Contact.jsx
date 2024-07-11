import React,{ useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Contact() {
  
  const form = useRef();
  const [result, showresult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lsgf62e', 'template_ymdqlpt', form.current, '6cjZlgD5TfUM-oUrw')
      .then((result) => {
          console.log(result.text);
      },
      (error) => {
          console.log(error.text);
      });

      e.target.reset();
      showresult(true);
    }
    setTimeout(()=>{
      showresult(false);
      }, 5000); 

  return (
    <>
      <Navbar />
      <div className="contactUs">
        <div className="title">
          <h2>Contact Us</h2>
        </div>
        <div className="box">
          <div className="contact form">
            <h2>Send a Message</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="formBox">
                <div className="row50">
                  <div className="inputBox">
                    <span>First Name</span>
                    <input type="text" placeholder="John" name="firstname" required autoComplete='off' />
                  </div>
                  <div className="inputBox">
                    <span>Last Name</span>
                    <input type="text" placeholder="Doe" name="lastname" required autoComplete='off' />
                  </div>
                </div>

                <div className="row50">
                  <div className="inputBox">
                    <span>Email</span>
                    <input type="email" placeholder="biru@gmail.com" name="email" required autoComplete='off' />
                  </div>
                  <div className="inputBox">
                    <span>Subject</span>
                    <input type="text" placeholder="Subject" name="subject" required autoComplete='off' />
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <span>Message</span>
                    <textarea placeholder="Write your message here..." name="textarea" required autoComplete='off'></textarea>
                  </div>
                </div>
                <div style={{color:"red"}}>{ result ? <p>Your message has been sent successfully</p> : null}</div>
                <div className="row100">
                  <div className="inputBox">
                    <input type="submit" name="submit" value="Send" />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* <!-- Info Box --> */}
          <div className="contact info">
            <h2>Contact Info</h2>
            <div className="infoBox">
              <div>
                <span><ion-icon name="location-outline"></ion-icon></span>
                <p>GA 146, Ruby, Kolkata 700107 <br />INDIA</p>
              </div>
              <div>
                <span><ion-icon name="mail"></ion-icon></span>
                <a href="mailto:santanu282@gmail.com">deybiru282@gmail.com</a>
              </div>
              <div>
                <span><ion-icon name="call"></ion-icon></span>
                <a href="tel:+91 738 469 0448">+91 738 469 0448</a>
              </div>
              {/* <!-- Social Media Links --> */}
              <ul className="socialMedia">
                <li><a href="/"><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li><a href="/"><ion-icon name="logo-instagram"></ion-icon></a></li>
                <li><a href="/"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                <li><a href="/"><ion-icon name="logo-twitter"></ion-icon></a></li>
              </ul>
            </div>
          </div>

          {/* <!-- Map Info --> */}
          <div className="contact map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d316.54196108135903!2d88.39930809077516!3d22.49658794450297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02715f1cb8e253%3A0xa8d2782220043d48!2sGREEN%20TOWER!5e0!3m2!1sen!2sin!4v1690877376236!5m2!1sen!2sin" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <Footer/>
    </>

  )
}


export default Contact;