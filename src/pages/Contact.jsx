import React from 'react'
import "../css/contact.css"

const Contact = () => {
  return (
    <div><section class="contact-section">
    <h2>Contact Us</h2>
    <form class="contact-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required/>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required/>
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" placeholder="Enter your message" rows="4" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </section></div>
  )
}

export default Contact