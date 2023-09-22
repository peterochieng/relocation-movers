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
          src={"/movers-2.jpeg"}
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

          <h1> Our Key Business Objectives and Services</h1>

          <div className={styles.whatwedo__item_list}>
            <span>
              {" "}
              <BiAnchor></BiAnchor>{" "}
            </span>
            <div className={styles.whatwedo__item_desc}>
              <h5>Client-Centric Approach</h5>
              <p>
              We prioritize your needs, offering tailored solutions across a spectrum of services
              </p>
            </div>
          </div>

          <div className={styles.whatwedo__item_list}>
            <span>
              {" "}
              <FaShuttleVan></FaShuttleVan>{" "}
            </span>
            <div className={styles.whatwedo__item_desc}>
              <h5>Diverse Service Portfolio</h5>
              <p>
              From relocations to storage, our comprehensive offerings ensure we meet your every requirement
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
