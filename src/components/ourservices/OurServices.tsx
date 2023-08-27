import React from "react";
import styles from "./ourservices.module.scss";
import Image from "next/image";
import { TfiControlForward } from "react-icons/tfi";

type OurServicesProps = {
  image: string;
  text: string;
  icon: React.ElementType;
  alt: string;
};

const OurServices = () => {
  const OurServicesData: OurServicesProps[] = [
    {
      image: "/hero-bg.jpg",
      text: "Sea Freight Transportation",
      alt: "Sea Freight Transportation",
      icon: TfiControlForward,
    },
    {
      image: "/hero-bg.jpg",
      text: "Air Freight Transportation",
      alt: "Air Freight Transportation",
      icon: TfiControlForward,
    },
    {
      image: "/hero-bg.jpg",
      text: "Road Freight Transportation",
      icon: TfiControlForward,
      alt: "Road Freight Transportation",
    },
  ];
  return (
    <div className={styles.ourservices}>
      <div className={styles.ourservices__content}>
        
        <div className={styles.ourservices__title}>
          <div className={styles.ourservices__title_divider_1}></div>
          <h3 className={styles.ourservices__title_text}>Our Services</h3>
          <div className={styles.ourservices__title_divider_2}></div>
        </div>

        <div className={styles.ourservices__text}>
          <h1>We are Very Trusted for Our Services</h1>
        </div>

        <div className={styles.ourservices__cards}>
          {OurServicesData.map((item) => (
            <div key={item.text} className={styles.ourservices__card_container}>
              <Image
                width={300}
                height={300}
                className={styles.ourservices__image}
                src={item.image}
                alt={item.alt}
              ></Image>

              <div className={styles.ourservices__cards_text}>
                <span className={styles.ourservices__card_height}></span>
                <h5 className={styles.ourservices__card_text}>{item.text}</h5>
                <div className={styles.ourservices__svg}>
                  <item.icon></item.icon>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OurServices;
