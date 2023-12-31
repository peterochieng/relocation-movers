import { FiTruck } from "react-icons/fi";
import styles from "./video.module.scss";
import { ReactElement } from "react";
import { FaAward, FaCodeBranch, FaSpaceShuttle } from "react-icons/fa";

type DeliveryProps = {
  icon: ReactElement;
  numbers: string;
  title: string;
};

const Video = () => {
  const deliveryData: DeliveryProps[] = [
    {
      icon: <FiTruck />,
      numbers: "56312",
      title: "Product delivery",
    },
    {
      icon: <FaCodeBranch />,
      numbers: "56312",
      title: "World Wide Branch",
    },
    {
      icon: <FaSpaceShuttle/>,
      numbers: "56312",
      title: "Modern transport",
    },
    {
      icon: <FaAward />,
      numbers: "56312",
      title: "Award winning",
    },
  ];

  return (
    <div className={styles.video}>
      <div className={styles.video__container}>
        <video controls>
          <source
            src="https://www.youtube.com/watch?v=wWgIAphfn2U"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={styles.video__items}>
        {deliveryData.map((data) => (
          <div className={styles.video__item} key={data.title}>
            <span className={styles.video__icons}>{data.icon}</span>

            <p>
              {data.numbers} <sup>+</sup>
            </p>

            <h5>{data.title}</h5>

            <div className={styles.video__progress_bar}>
              <span className={styles.video__span_1}></span>
              <span className={styles.video__span_2}></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
