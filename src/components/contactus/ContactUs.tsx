"use client";
import React, { ReactElement } from "react";
import styles from "./contactus.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsSend } from "react-icons/bs";
import { type } from "os";
import { BiPhoneOutgoing } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
import { HiLocationMarker } from "react-icons/hi";

type formikData = {
  firstName: string;
  lastName: string;
  email: string;
};

type phoneData = {
  title: string,
  telNumber: number | string,
  icon: ReactElement
}

const phoneDetails: phoneData[]=[
  {
    title: "Phone Number",
    telNumber: 25478454121,
    icon: <BiPhoneOutgoing></BiPhoneOutgoing>
},
{
  title: "Email Address",
  telNumber: "admin@milltech.link",
  icon: <TfiEmail></TfiEmail>
},
{
  title: "Main Office",
  telNumber: 25478454121,
  icon: <HiLocationMarker></HiLocationMarker>
},
]

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    } as formikData,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values: formikData) => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <div className={styles.contactus}>
      <div className={styles.contactus__Container}>

        <div className={styles.contactus__phone_number}>

            {phoneDetails.map((data)=> (
              <div className={styles.contactus__phone} key={data.title}>
              <span className={styles.contactus__details}>
                <p>{data.title}</p>
                {data.telNumber}
              </span>

              <span className={styles.contactus__icon}>
                {data.icon}
              </span>
            </div>
            ))}

        </div>

        <div className={styles.contactus__title__container}>
          <div className={styles.contactus__title}>
            <div className={styles.contactus__title_content}>
              <span className={styles.contactus__title_line_1}></span>
              <p>Contact Us</p>
              <span className={styles.contactus__title_line_1}></span>
            </div>
            <h1>Booking for Product Transportation</h1>
          </div>

          <div className={styles.contactus__form}>
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="firstName" className={styles.contactus__lable}>
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter First Name"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null}

              <label htmlFor="lastName" className={styles.contactus__lable}>
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter Last Name"
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null}

              <label htmlFor="email" className={styles.contactus__lable}>
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
              <br />
              <button type="submit">
                Send Request <BsSend></BsSend>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
