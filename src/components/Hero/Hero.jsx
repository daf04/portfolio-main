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
          I'm a web developer with 2 years of experience with Front End to develop, test, and monitor company websites and applications. 
          <p>Have worked on several web and application projects to improve efficiency and data management.</p>
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
