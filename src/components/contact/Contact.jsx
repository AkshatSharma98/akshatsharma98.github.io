import React, { useRef, useEffect } from 'react';
import "./contact.css"
import emailjs from '@emailjs/browser';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 }
};

const Contact = () => {
  const form = useRef();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ubmmis8',
     'template_vx0klqs', form.current, 'MnCgqntXlJMxL0Stf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  useEffect(() => {
    if (inView) {
      console.log("In view called");
      controls.start("visible");
    }
  }, [controls, inView]);

  return (

    <motion.div
    ref={ref}
    variants={squareVariants}
    className="square"
    animate={controls}
    initial="hidden"
    >

   <div className="container contact">
     <form className="contact__form" ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder='Your Name'></input>
        <input type="text" name="user_email" placeholder='Your Email'></input>
        <input type="text" name="message" placeholder='Message'></input>
        <input className="btn" type="submit" value="Send" />
        </form>
   </div>

   </motion.div>
  );
};

export default Contact;