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
          I am a web developer with 2 years experience with Front End to develop, test, maintain and monitor corporate websites and applications. 
          <p>Has worked on several web and application projects to increase the efficiency of recovering errors on a website.</p>
          <p>I can also use Back End Development in creating databases and sharing data between different applications.</p> 
          <br></br>
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
