import React from "react";
import styles from "./footer.module.scss";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import Image from "next/image";
import img from "../../../public/hero-bg.jpeg"
import img1 from "../../../public/soul-movers-contact.jpg"
import img2 from "../../../public/soul-movers-tv-mounting-2.jpg"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>

        <div className={styles.footer__About_us}>
          <h5>About Us</h5>

          <span className={styles.footer__divider}></span>

          <span className={styles.footer__text} >Your Trusted Partner for Reliable Moving and Relocation Services</span>

          <div className={styles.footer__social_links}>
            <FaFacebook></FaFacebook>
            {/* <BsTwitter></BsTwitter>
            <BsInstagram></BsInstagram> */}
          </div>
        </div>

        <div className={styles.footer__Quick_links}>
          <h5>Quick Links</h5>

          <span className={styles.footer__divider}></span>

          <span className={styles.footer__text}>Home and Office Moves</span>
          <span className={styles.footer__text}>Packing and Storage Solutions</span>
          <span className={styles.footer__text}>Your Trusted Partner</span>
          <span className={styles.footer__text}>Requesting a Transportation Quot</span>
          copyright: <a href="http://milltech.link">Milltech</a>
        </div>

        <div className={styles.footer__Photo_gallery}>
          <h5>Photo Gallery</h5>

          <span className={styles.footer__divider}></span>

          <div className={styles.footer__gallery}>
            <Image src={img} alt="footer gallery" className={styles.footer__image}></Image>
            <Image src={img1} alt="footer gallery" className={styles.footer__image}></Image>
            <Image src={img2} alt="footer gallery" className={styles.footer__image}></Image>
          </div>

        </div>
       
      </div>
     
    </div>
  );
};

export default Footer;
