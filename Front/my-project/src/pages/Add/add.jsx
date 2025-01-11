import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";  

const SignupSchema = Yup.object().shape({
  image: Yup.string().url().required("Required"),
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  job: Yup.string().min(2, "Too Short!").max(100, "Too Long!").required("Required"),
});

function Add() {
  const navigate = useNavigate();

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{ image: "", name: "", job: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          axios.post("http://localhost:3001/member", values).then(() => navigate(-1));
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="image" placeholder="Image URL" className={styles.input} />
            {errors.image && touched.image && <div className={styles.error}>{errors.image}</div>}
            <Field name="name" placeholder="Name" className={styles.input} />
            {errors.name && touched.name && <div className={styles.error}>{errors.name}</div>}
            <Field name="job" placeholder="Job" className={styles.input} />
            {errors.job && touched.job && <div className={styles.error}>{errors.job}</div>}
            <button type="submit" className={styles.button}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Add;
