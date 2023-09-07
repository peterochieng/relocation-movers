import React from "react";
import styles from "./footer.module.scss";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import Image from "next/image";
import img from "../../../public/hero-bg.jpg"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>

        <div className={styles.footer__About_us}>
          <h5>About Us</h5>

          <span className={styles.footer__divider}></span>

          <span className={styles.footer__text} >Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum</span>

          <div className={styles.footer__social_links}>
            <FaFacebook></FaFacebook>
            <BsTwitter></BsTwitter>
            <BsInstagram></BsInstagram>
          </div>
        </div>

        <div className={styles.footer__Quick_links}>
          <h5>Quick Links</h5>

          <span className={styles.footer__divider}></span>

          <span className={styles.footer__text}>Lorem ipsum lorem ipsum</span>
          <span className={styles.footer__text}>Lorem ipsum lorem ipsum</span>
          <span className={styles.footer__text}>Lorem ipsum lorem ipsum</span>
          <span className={styles.footer__text}>Lorem ipsum lorem ipsum</span>
        </div>

        <div className={styles.footer__Photo_gallery}>
          <h5>Photo Gallery</h5>

          <span className={styles.footer__divider}></span>

          <div className={styles.footer__gallery}>
            <Image src={img} alt="footer gallery" className={styles.footer__image}></Image>
            <Image src={img} alt="footer gallery" className={styles.footer__image}></Image>
            <Image src={img} alt="footer gallery" className={styles.footer__image}></Image>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
