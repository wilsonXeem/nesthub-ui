import React from "react";
import "./contact.css";
import Header from "../../components/Header";
import ContactUs from "./components/ContactUs";
import ContactForm from "./components/ContactForm";
import ListNow from "../../components/ListNow";

function ContactPage() {
  return (
    <>
      <div class="contact monserat">
        <Header />
        <ContactUs />
        <ContactForm />
      </div>
        <ListNow />
    </>
  );
}

export default ContactPage;
