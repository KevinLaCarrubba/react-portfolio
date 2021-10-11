import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <a href="mailto:Kevin.LaCarrubba@yahoo.com">
        <img src="/images/email.png" alt="Email" />
      </a>
      <a href="https://github.com/KevinLaCarrubba">
        <img src="/images/github.png" alt="Github" />
      </a>
      <a href="https://www.linkedin.com/in/kevin-lacarrubba-2b4381136/">
        <img src="/images/linkedin.png" alt="Linkedin" />
      </a>
    </div>
  );
}
