import React from "react";
import exp from "../../../assets/skills/node.png";
import rdx from "../../../assets/skills/redux.png";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={exp} alt="" />
            </div>
            <p>Javascript</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={rdx} alt="" />
            </div>
            <p>Redux</p>
          </div>
        </div>
      </div>
    </section>
  );
};
