import React, {useState, useEffect} from 'react'
import "./ContactType2.css"
import CustomInput from './CustomInput';
import emailjs from '@emailjs/browser';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactType2 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); 
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      console.log("In view called");
      controls.start("visible");
    }
  }, [controls, inView]);
  
  const onChangeName = (newValue) => {
    constHideAllErrors();
    setName(newValue);
  };

  const onChangeEmail = (newValue) => {
    constHideAllErrors();
    setEmail(newValue);
  };

  const onChangeMessage = (newValue) => {
    constHideAllErrors();
    setMessage(newValue);
  };   

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validateInputAndShowErrorIfNeeded = () => {
    if(name.length == 0 ||
        message.length == 0 ||
        validateEmail(email) == false) {
           name.length == 0 ? setNameError('name can not be empty') : setNameError('');
           message.length == 0 ? setMessageError('message can not be empty') : setMessageError(''); 
           validateEmail(email) != true ? setEmailError('check your email') : setEmailError(''); 
           return false;
     }

     return true;
  }

  const constHideAllErrors = () => {
    setNameError('');
    setMessageError(''); 
    setEmailError(''); 
  }

  const onSubmit = () => {
      console.log("validating email: " + validateEmail(email));
      if(validateInputAndShowErrorIfNeeded() != true) {
           return;
      }
      sendEmail(email, message, name)
  }

  const sendEmail = (email, message, name) => {
    var data = {
        service_id: 'service_ubmmis8',
        template_id: 'template_vx0klqs',
        user_id: 'MnCgqntXlJMxL0Stf',
        template_params: {
            'from_name': name,
            'from_email': email,
            'message': message
        }
    };

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', requestOptions)
        .then(response => {
            response.json();
        })
        .then((text) => {
            console.log(text);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setEmail('');
            setName('');
            setMessage('');
            alert('message is sent');
        })
  }

  return (
 <>
 <div className='container contact-type2__parent'>
 <h1>Happy to see you here, feel free to drop me a message</h1>
    <motion.div
            ref={ref}
            variants={squareVariants}
            animate={controls}
            initial="hidden">
            <div className='contact-type2' id="contact">
                <CustomInput text = {name}
                            error = {nameError} 
                            onChange={onChangeName}
                            placeHolder={"Enter Your Name"} />

                <CustomInput text = {email}
                            error = {emailError} 
                            onChange={onChangeEmail}
                            placeHolder={"Enter Your Email"} />  

                <CustomInput text = {message}
                            error = {messageError} 
                            onChange={onChangeMessage}
                            placeHolder={"Enter Your Message"} />   

                <button className='contact-type2__button' onClick={onSubmit}>Send</button>                        
            </div>
        </motion.div>
    </div>
    </>
  )
}

export default ContactType2