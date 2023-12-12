import React from "react";
import rental from "../../../assets/projects/Site 2.png";
import country from "../../../assets/projects/country.png";
import tracker from "../../../assets/projects/IPTracker.png";
import game from "../../../assets/projects/dicegame.png";
import food from "../../../assets/projects/food.png";
import styles from "./ProjectCard.module.css";

export const ProjectCard = () => {
  return (
    <>
      <div className={styles.container}>
        <img src={rental} alt="netlix-clone" className={styles.image} />
        <h3 className={styles.title}>Car-Rental</h3>
        <p className={styles.description}>
          This is a Car-Rental App and fetch Data by json Database from backend
          and see in live & i m also learn redux.
        </p>
        <div className={styles.links}>
          <a
            href="https://jay9949carrental.netlify.app/"
            target="blank"
            className={styles.link}
          >
            Demo
          </a>
          <a
            href="https://github.com/jay9949/car-rental-app"
            target="blank"
            className={styles.link}
          >
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
          <a
            href="https://jay9949iptracker.netlify.app/"
            target="blank"
            className={styles.link}
          >
            Demo
          </a>
          <a
            href="https://github.com/jay9949/ip-tracker-app"
            target="blank"
            className={styles.link}
          >
            Source
          </a>
        </div>
      </div>
      <div className={styles.container}>
        <img src={game} alt="dice" className={styles.image} />
        <h3 className={styles.title}>Dice Game App</h3>
        <p className={styles.description}>
          In this project player has choose any number & click the dice that how
          it's work. & this project also live
        </p>
        <div className={styles.links}>
          <a
            href="https://jay9949dicegame.netlify.app/"
            target="blank"
            className={styles.link}
          >
            Demo
          </a>
          <a
            href="https://github.com/jay9949/dicegame"
            target="blank"
            className={styles.link}
          >
            Source
          </a>
        </div>
      </div>
      <div className={styles.container}>
        <img src={food} alt="country" className={styles.image} />
        <h3 className={styles.title}>The Food Order App</h3>
        <p className={styles.description}>
          In this project Client use to order food & This project i m use
          firebase for backend data & also customer need to fill some required
          details.
        </p>
        <div className={styles.links}>
          <a
            href="https://jay9949food.netlify.app/"
            target="blank"
            className={styles.link}
          >
            Demo
          </a>
          <a
            href="https://github.com/jay9949/The-Food-Order-App"
            target="blank"
            className={styles.link}
          >
            Source
          </a>
        </div>
      </div>
    </>
  );
};
