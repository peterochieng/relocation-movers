"use client";
import React from "react";
import styles from "./quaotation.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsSend } from "react-icons/bs";

type formikData = {
  firstName: string;
  lastName: string;
  email: string;
};

const Quotation = () => {
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
    <div className={styles.quotation}>
      <div className={styles.quotation__title}>
        <div className={styles.quotion__title_content}>
          <span className={styles.quotion__title_line_1}></span>
          <p>Request a Quote</p>
          <span className={styles.quotion__title_line_1}></span>
        </div>

        <h1>Requesting a Transportation Quote</h1>
      </div>

      <div className={styles.quotion__form}>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName" className={styles.quotation__lable}>
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

          <label htmlFor="lastName" className={styles.quotation__lable}>
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

          <label htmlFor="email" className={styles.quotation__lable}>
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
  );
};

export default Quotation;
