import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o98bwi5",
        "template_sth92tm",
        form.current,
        "xhwJRfRQycsKWXOHd"
      )
      .then(
        (result) => {
          alert('message sent successfully')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="all">
      <form className="mrof" ref={form} onSubmit={sendEmail}>
        <label className="put">Name</label>
        <input className="inp" type="text" name="user_name" />
        <label className="put">Email</label>
        <input className="inp" type="email" name="user_email" />
        <label className="put">Message</label>
        <textarea className="inp" name="message" />
        <button className="sbtBtn" type="submit" > SEND </button>
      </form>
    </div>
  );
};

export default Contact;
