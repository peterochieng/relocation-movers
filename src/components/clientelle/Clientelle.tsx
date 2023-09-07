import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.jpg"
import styles from "./clientelle.module.scss";

const Clientelle = () => {
  return (
    <div className={styles.clientelle__container}>

      <div className={styles.clientelle__logo}>
        <Image src={logo} alt="my_logo"></Image>
      </div>

      <div className={styles.clientelle__logo__list}>
      <Image src={logo} alt="my_logo"></Image>
      <Image src={logo} alt="my_logo"></Image>
      <Image src={logo} alt="my_logo"></Image>
      </div>

    </div>
  );
};

export default Clientelle;
