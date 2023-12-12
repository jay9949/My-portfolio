import React from "react";
import netflix from "../../../assets/projects/netflix.png";
import country from "../../../assets/projects/country.png";
import tracker from "../../../assets/projects/IPTracker.png";
import styles from "./ProjectCard.module.css";

export const ProjectCard = () => {
  return (
    <>
      <div className={styles.container}>
        <img src={netflix} alt="netlix-clone" className={styles.image} />
        <h3 className={styles.title}>Netflix-Clone</h3>
        <p className={styles.description}>
          This is a Netflix-clone and fetch by TMDB API Database from
          backend/API.
        </p>
        <div className={styles.links}>
          <a href="#" className={styles.link}>
            Demo
          </a>
          <a href="#" className={styles.link}>
            Source
          </a>
        </div>
      </div>
      <div className={styles.container}>
        <img src={country} alt="country" className={styles.image} />
        <h3 className={styles.title}>Country App</h3>
        <p className={styles.description}>
          In this project I m using restcountries API & Filter country by
          Search. Checkout this project
        </p>
        <div className={styles.links}>
          <a href="#" className={styles.link}>
            Demo
          </a>
          <a href="#" className={styles.link}>
            Source
          </a>
        </div>
      </div>
      <div className={styles.container}>
        <img src={tracker} alt="ip-tracker" className={styles.image} />
        <h3 className={styles.title}>IP Address Tracker</h3>
        <p className={styles.description}>
          In this project I m using API for tracking IP address & domain & also
          given exact location.
        </p>
        <div className={styles.links}>
          <a href="#" className={styles.link}>
            Demo
          </a>
          <a href="#" className={styles.link}>
            Source
          </a>
        </div>
      </div>
      <div className={styles.container}>
        <img src={tracker} alt="ip-tracker" className={styles.image} />
        <h3 className={styles.title}>News Monkey</h3>
        <p className={styles.description}>
          In this project I m using news API & fetching data for daily updated
          news & also using Scss
        </p>
        <div className={styles.links}>
          <a href="#" className={styles.link}>
            Demo
          </a>
          <a href="#" className={styles.link}>
            Source
          </a>
        </div>
      </div>
    </>
  );
};
