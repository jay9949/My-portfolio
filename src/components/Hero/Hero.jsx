import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jay Suthar</h1>
        <p className={styles.description}>
          I'm a front-end Developer with 6 month of experience using React and
          Redux@Toolkit. Reach out if you'd like to work with me.
        </p>
        <a
          href="mailto:jay37192@gmail.com"
          target="blank"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/man_vector.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
