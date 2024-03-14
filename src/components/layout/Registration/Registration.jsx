import React from "react";
import reg from "./Registration.module.css";

// validation schema and fromik
import { useFormik } from "formik";
import { regFormSchema } from "../../../validation/validation";

// redaux
import { useDispatch } from "react-redux";
import { RegUser } from "../../../ReduxToolkit/Features/Registration.Slice";

// navigayion
import { useNavigate } from "react-router-dom";

// Bootstarp
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const regUser = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: regFormSchema,
    onSubmit: async (data, actions) => {
      handleSumbitt(data, actions);
      actions.resetForm();
    },
  });

  const handleSumbitt = async (data) => {
    try {
      await dispatch(RegUser(data));
      navigate("/questions");
    } catch (error) {
      console.error("Error occurred while  creating user:", error);
    }
  };

  return (
    <>
      <div className={reg.register}>
        <h3>Exam Registration</h3>
        <div className={reg.inputField}>
          <Form onSubmit={regUser.handleSubmit}>
            <Form.Group className={reg.inputField} controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Name"
                name="name"
                onBlur={regUser.handleBlur}
                onChange={regUser.handleChange}
                value={regUser.values.name}
                className={
                  regUser.errors.name && regUser.touched.name
                    ? "formInput form-control is-invalid"
                    : "formInput form-control"
                }
              />
              {regUser.errors.name && regUser.touched.name && (
                <div className="invalid-feedback">{regUser.errors.name}</div>
              )}
            </Form.Group>
            <Form.Group className={reg.inputField} controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                onBlur={regUser.handleBlur}
                onChange={regUser.handleChange}
                value={regUser.values.email}
                className={
                  regUser.errors.email && regUser.touched.email
                    ? "formInput form-control is-invalid"
                    : "formInput form-control"
                }
              />
              {regUser.errors.email && regUser.touched.email && (
                <div className="invalid-feedback">{regUser.errors.email}</div>
              )}
            </Form.Group>
            <Button type="submit" className={reg.login}>
              Start Exam
            </Button>{" "}
          </Form>
        </div>
      </div>
    </>
  );
};

export default Registration;
