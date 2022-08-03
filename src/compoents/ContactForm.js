import React , {useEffect, useState, useRef } from "react";
import emailjs from '@emailjs/browser';




import AOS from 'aos';
AOS.init({
  duration:1000
});
function Contact() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [values, setValues] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const form = useRef();

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
        console.log(values)

  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const renderAlert = () => (
    <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
      <p>your message submitted successfully</p>
    </div>
  )
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qqazqeh', 'template_o84n9hq', form.current, 'fV9J3mwnXspK6Va1L')
    .then(response => {
      console.log('SUCCESS!', response);
      setValues({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
      setStatus('SUCCESS');
    }, error => {
      console.log('FAILED...', error);
    });
}

  return (
      <div>
        {/* <!--*-*-*-*-*-*-*-*-*-*-*-*-*-*-* Contact Section *-*-*-*-*-*-*-*-*-*-*-*-*-*-*--> */}
      <section id="contact">
      {status && renderAlert()}
        <form class="contact__form" onSubmit={sendEmail} ref={form}>
        <label>Name</label>
          <input type="text" placeholder="Name"  name="fullName" value={values.fullName} onChange={handleChange}/>
          <label>Email</label>
          <input type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange}/>
          <label>Subject</label>
          <input type="text" placeholder="Subject" name="subject" value={values.subject} onChange={handleChange}/>
          <label>Message</label>
          <textarea name="message" placeholder="Message" value={values.message} onChange={handleChange}></textarea>
          <input type="submit" value="Submit" />
          </form>
      </section>
      </div>
  );
}

export default Contact;