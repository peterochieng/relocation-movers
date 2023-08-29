
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

          <h3>Our Proffessional Experience & Skills</h3>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur molestiae a quam possimus eligendi! Mollitia illo quos
            veniam reiciendis fugit error esse tempore odit sunt, quaerat ex
            iste aliquam blanditiis?
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
              Sea Freight <span>85%</span>
            </h5>

            <div className={styles.ourskills__rater}>
              <span className={styles.ourskills__rating_pro_line_1}></span>
              <span className={styles.ourskills__rating_pro_line_2}></span>
            </div>
          </div>

          <div className={styles.OurSkills__rating_pro}>
            <h5>
              Road Freight <span>95%</span>
            </h5>

            <div className={styles.ourskills__rater}>
              <span className={styles.ourskills__rating_pro_line_1}></span>
              <span className={styles.ourskills__rating_pro_line_2}></span>
            </div>
          </div>

          <div className={styles.OurSkills__rating_pro}>
            <h5>
              Air Freight <span>95%</span>
            </h5>

            <div className={styles.ourskills__rater}>
              <span className={styles.ourskills__rating_pro_line_1}></span>
              <span className={styles.ourskills__rating_pro_line_2}></span>
            </div>
          </div>

          <div className={styles.OurSkills__rating_pro}>
            <h5>
              Air Freight <span>95%</span>
            </h5>

            <div className={styles.ourskills__rater}>
              <span className={styles.ourskills__rating_pro_line_1}></span>
              <span className={styles.ourskills__rating_pro_line_2}></span>
            </div>
          </div>

          <div className={styles.OurSkills__rating_pro}>
            <h5>
              Air Freight <span>95%</span>
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
