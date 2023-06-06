import React from "react";
import s from "./Contacts.module.css";
import {SlSocialInstagram } from 'react-icons/sl';
import { BsWhatsapp } from 'react-icons/bs'

function Contacts() {
  return (
    <div className={s.contactsContainer}>
      <div className={s.contact}>
          <h3>Contact</h3>
          <p>+49 999 999 99 99</p>
        <div className={s.socialLogo}>
          <div className={s.instagram}>
          
            <a href="https://www.instagram.com/aittr.de/" target="_blank">
              <SlSocialInstagram width={46} />
              <p> instagram</p>
            </a>
          </div>
          <div className={s.whatsApp}>
            <a href="https://api.whatsapp.com/send?phone=+493052014182_WhatsApp" target="_blank">
              <BsWhatsapp width={46} />
              <p> WhatsApp</p>
            </a>
          </div>
        </div>
      </div>
      <div className={s.addres}>
          <h3>Address</h3>
          <a href="https://www.google.com/search?q=telranDE" target="_blank">
            <p className={s.addersPlace}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
          </a>
          <p>Working Hours:</p>
          <p>24 hours a day</p>
      </div>
    </div>
  );
}

export default Contacts;
