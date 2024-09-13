import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate input fields
    if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({
        ...errors,
        [name]: !emailPattern.test(value) && value.length > 0
      });
    } else {
      setErrors({
        ...errors,
        [name]: value.trim() === ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for errors before submission
    const newErrors = {
      name: formData.name.trim() === '',
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && formData.email.length > 0,
      message: formData.message.trim() === ''
    };

    if (Object.values(newErrors).some(Boolean)) {
      setErrors(newErrors);
      return;
    }

    alert('Message sent! Thank you for contacting me. I will respond to you soon!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setErrors({
      name: false,
      email: false,
      message: false
    });
  };

  return (
    <div className="contact-page">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error-message">This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error-message">Please enter a valid email address</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <span className="error-message">This field is required</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;