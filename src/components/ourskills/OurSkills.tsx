import React, { useState } from "react";
import styles from "./ourskilss.module.scss";
import { FiSend } from "react-icons/fi";

const OurSkills = () => {
  return (
    <div className={styles.OurSkills}>
      <div className={styles.OurSkills__content}>
        <div className={styles.OurSkills__skils}>
          <div className={styles.OurSkills__title}>
            <span className={styles.OurSkills__title_line}></span>
            <h4>Our Skills</h4>
          </div>

          <h3>Our Expertise and Proficiency in the Field</h3>

          <p>
            We bring a wealth of knowledge and mastery to our work, backed by
            years of experience, ensuring top-notch service quality and
            exceptional results in our field.
          </p>

          <span className={styles.OurSkills__button}>
            <a href="">Appointment</a>
            <span className={styles.OurSkills__icon}>
              <FiSend></FiSend>
            </span>
          </span>
        </div>

        <div className={styles.OurSkills__rating}>
          <div className={styles.OurSkills__rating_pro}>
            <h5>
            Residential Moving <span>95%</span>
            </h5>

            <div className={styles.ourskills__rater}>
              <span className={styles.ourskills__rating_pro_line_1}></span>
              <span className={styles.ourskills__rating_pro_line_2}></span>
            </div>
          </div>

          <div className={styles.OurSkills__rating_pro}>
            <h5>
            Office Moving <span>95%</span>
            </h5>

            <div className={styles.ourskills__rater}>
              <span className={styles.ourskills__rating_pro_line_1}></span>
              <span className={styles.ourskills__rating_pro_line_2}></span>
            </div>
          </div>

          <div className={styles.OurSkills__rating_pro}>
            <h5>
            Packing and Unpacking <span>95%</span>
            </h5>

            <div className={styles.ourskills__rater}>
              <span className={styles.ourskills__rating_pro_line_1}></span>
              <span className={styles.ourskills__rating_pro_line_2}></span>
            </div>
          </div>

          <div className={styles.OurSkills__rating_pro}>
            <h5>
            Loading and Offloading <span>95%</span>
            </h5>

            <div className={styles.ourskills__rater}>
              <span className={styles.ourskills__rating_pro_line_1}></span>
              <span className={styles.ourskills__rating_pro_line_2}></span>
            </div>
          </div>

          <div className={styles.OurSkills__rating_pro}>
            <h5>
            Country Moving <span>95%</span>
            </h5>

            <div className={styles.ourskills__rater}>
              <span className={styles.ourskills__rating_pro_line_1}></span>
              <span className={styles.ourskills__rating_pro_line_2}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSkills;
