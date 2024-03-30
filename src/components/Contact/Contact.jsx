import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:aldrichdaffa0401@gmail.com">aldrichdaffa0401@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/aldrich-daffa-zalfansyah-b1a612265/">Aldrich Daffa Zalfansyah</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/instagramIcon.png")} alt="Instagram icon" />
          <a href="https://www.instagram.com/aldrchdapaz">Aldrchdapaz</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/daf04">Daf04</a>
        </li>
      </ul>
    </footer>
  );
};
