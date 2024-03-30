import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,</h1>
        <p className={styles.titles}>I'm Aldrich Daffa Zalfansyah</p>
        <p className={styles.description}>
          I'm a Junior Front End Developer with experience using HTML, CSS, and React.Js to develop a company profile website. 
          <p>I can also use Back End Development to share data between different applications.</p> 
          <p>Reach out if you'd like to learn more!</p>
        </p>
        <a href="mailto:aldrichdaffa0401@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/developer_male.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
