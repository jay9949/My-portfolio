import React from "react";
import { MdMail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <MdMail className={styles.icon} />
          <a href="mailto:jay37192@gmail.com">jay37192@gmail.com</a>
        </li>
        <li className={styles.link}>
          <IoLogoLinkedin className={styles.icon} />
          <a href="https://www.linkedin.com/Jaysuthar">
            linkedin.com/Jaysuthar
          </a>
        </li>
        <li className={styles.link}>
          <FaGithub className={styles.icon} />
          <a href="https://www.github.com/jay9949">github.com/jay9949</a>
        </li>
      </ul>
    </footer>
  );
};
