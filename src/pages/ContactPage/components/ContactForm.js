import React from "react";

function ContactForm() {
  return (
    <div className="contact_us">
      <p className="larger_text slide_in" style={{ marginBottom: "1rem" }}>
        Write Us
      </p>
      <div className="contact_us_right">
        <label for="name" style={{ fontSize: "large", fontWeight: "500" }}>
          Name
        </label>
        <input type="text" name="name" placeholder="Enter your name" />
        <label for="name" style={{ fontSize: "large", fontWeight: "500" }}>
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter a valid email address"
        />
        <label for="name" style={{ fontSize: "large", fontWeight: "500" }}>
          Message
        </label>
        <textarea
          name="message"
          placeholder="Type your message"
          rows={4}
        ></textarea>
        <div>
          <button class="black_button">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
