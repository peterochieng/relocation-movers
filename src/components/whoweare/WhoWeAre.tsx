import React from "react";
import styles from "./whoweare.module.scss";
import { BsFillAirplaneEnginesFill } from "react-icons/bs";

type DataProps = {
  icon: React.ElementType;
  title: string;
  text: string;
};

const WhoWeAre = () => {
  const Data: DataProps[] = [
    {
      icon: BsFillAirplaneEnginesFill,
      title: "Something to know about who we are",
      text: "Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum",
    },
    {
      icon: BsFillAirplaneEnginesFill,
      title: "We have won so many trophies you",
      text: "Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum ipsum lorem ipsum ipsum lorem ipsum",
    },
  ];

  return (
    <div className={styles.whoweare}>
      <div className={styles.whoweare__content}>
        <div className={styles.whoweare__xp_years}>
          <sub>
            <div className={styles.whoweare__xp_content}>
              <p>
                25 <sup>+</sup>
              </p>
              <span>Years of Experience</span>
            </div>
          </sub>
        </div>

        <div className={styles.whoweare__something}>
          <div className={styles.whoweare__title}>
            <div className={styles.whoweare__title_content}>
              <div className={styles.whoweare__title_divider}></div>
              <h3>Who we are</h3>
            </div>
          </div>

          <div className={styles.whoweare__something__content}>
            <h1>Something to know about who we are</h1>

            {Data.map((data) => (
              <div
                key={data.title}
                className={styles.whoweare__something__content_2}
              >
                <div className={styles.svg}>
                  <data.icon />
                </div>
                <div className={styles.whoweare__something2_item}>
                  <h3>{data.title}</h3>
                  <p>{data.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
