import Image from "next/image";
import styles from "./page.module.scss";
import { BsPlayFill, BsFillTrainFreightFrontFill, BsFillAirplaneEnginesFill } from "react-icons/bs";
import { HiTruck } from "react-icons/hi";
import { CiLocationArrow1 } from "react-icons/ci";

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__content}>
        <div className={styles.hero__text}>
          <h1>
            World&lsquo;s Best <br></br> Transportation <br></br> and Logistics
          </h1>
        </div>
        <div className={styles.hero__button}>
          <span className={styles.hero__button_1}>
            <a href="#" className={styles.hero__links}>
              Get Started <CiLocationArrow1 />
            </a>
          </span>
          <span className={styles.hero__button_2}>
            <a href="#" className={styles.hero__links}>
              Our Services <CiLocationArrow1 />
            </a>
          </span>
        </div>
      </div>

      <div className={styles.hero__content_2}>
        <div className={styles.hero__play_button}>
          <span>
            <BsPlayFill />
          </span>
        </div>
      </div>

      <div className={styles.hero__services}>
        <div className={styles.hero__dividers}>
          <div className={styles.hero__divider}></div>
          <div className={styles.hero__divider_2}></div>
        </div>

        <div className={styles.hero__service_items}>
          <div className={styles.hero__item_1}>
            <span>
              <HiTruck></HiTruck>
            </span>
            <div className={styles.hero__service_item}>
              <h1>Road Freight</h1>
              <p>Lorem ipsum lorem ipsum</p>
              <span>Read More</span>
            </div>
          </div>
          <div className={styles.hero__item_2}>
            <span>
              <BsFillTrainFreightFrontFill></BsFillTrainFreightFrontFill>
            </span>
            <div className={styles.hero__service_item}>
              <h1>Sea Freight</h1>
              <p>Lorem ipsum lorem ipsum</p>
              <span>Read More</span>
            </div>
          </div>
          <div className={styles.hero__item_3}>
            <span>
              <BsFillAirplaneEnginesFill></BsFillAirplaneEnginesFill>
            </span>
            <div className={styles.hero__service_item}>
              <h1>Air Freight</h1>
              <p>Lorem ipsum lorem ipsum</p>
              <span>Read More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
