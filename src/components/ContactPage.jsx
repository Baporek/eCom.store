import React, { useState } from 'react';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  // store form field values
  const [fullName, setFullName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  // store validation error messages
  const [fullNameError, setFullNameError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [bodyError, setBodyError] = useState('');

  // State variable to track if the form is submitted
  const [submitted, setSubmitted] = useState(false);

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    let isValid = true;

    if (fullName.length < 3) {
      setFullNameError('Full name must be at least 3 characters');
      isValid = false;
    } else {
      setFullNameError('');
    }

    if (subject.length < 3) {
      setSubjectError('Subject must be at least 3 characters');
      isValid = false;
    } else {
      setSubjectError('');
    }

    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (body.length < 3) {
      setBodyError('Body must be at least 3 characters');
      isValid = false;
    } else {
      setBodyError('');
    }

    if (isValid) {
      console.log('Form submitted');
      setFullName('');
      setSubject('');
      setEmail('');
      setBody('');
      
      setSubmitted(true);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Contact Us</h2>
      {submitted && <p>Your contact form was submitted</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <span className={styles.error}>{fullNameError}</span>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <span className={styles.error}>{subjectError}</span>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className={styles.error}>{emailError}</span>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <span className={styles.error}>{bodyError}</span>
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
