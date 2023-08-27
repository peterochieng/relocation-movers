import React from "react";
import styles from "./whatwedo.module.scss";
import Image from "next/image";
import { BiAnchor } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";
import { FaShuttleVan } from "react-icons/fa";

const WhatWeDo = () => {
  return (
    <div className={styles.whatwedo}>
      <div className={styles.whatwedo__content}>
        <Image
          src={"/hero-bg.jpg"}
          alt="what_we_do_image"
          width={0}
          height={0}
          sizes="100vw"
        ></Image>

        <div className={styles.whatwedo__items}>
          <div className={styles.whatwedo__item_title}>
            <span></span>
            <h4>What We Do</h4>
          </div>

          <h1>Explore Our Main Goals for Business</h1>

          <div className={styles.whatwedo__item_list}>
            <span>
              {" "}
              <BiAnchor></BiAnchor>{" "}
            </span>
            <div className={styles.whatwedo__item_desc}>
              <h5>Time Maintenance</h5>
              <p>
                Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
                lorem ipsum
              </p>
            </div>
          </div>

          <div className={styles.whatwedo__item_list}>
            <span>
              {" "}
              <FaShuttleVan></FaShuttleVan>{" "}
            </span>
            <div className={styles.whatwedo__item_desc}>
              <h5>Security & Trust</h5>
              <p>
                Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
                lorem ipsum
              </p>
            </div>
          </div>

          <div className={styles.whatwedo__item_button}>
            <span className={styles.whatwedo__item_anchor}>
              <a href="#">Learn More</a>
              <span className={styles.whatwedo__item_anchor_icon}>
                <BsFillSendFill></BsFillSendFill>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
