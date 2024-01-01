import React, { useState } from "react";

const FormValidation = () => {
    const [formdata, setFormdata] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const regexFirstName = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)$/;
    const regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
    });

    const validateField = (fieldName, value) => {
        switch (fieldName) {
            case "firstName":
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    firstName: !regexFirstName.test(value),
                }));
                break;
            case "lastName":
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    lastName: !regexFirstName.test(value),
                }));
                break;
            case "email":
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    email: !regexEmail.test(value),
                }));
                break;
            default:
                break;
        }
    };

    const handleInputChange = (fieldName, value) => {
        setFormdata((prevFormData) => ({ ...prevFormData, [fieldName]: value }));
        validateField(fieldName, value);
    };

    const formSubmit = (e) => {
        e.preventDefault();

        // Reset all errors
        setErrors({
            firstName: false,
            lastName: false,
            email: false,
        });

        // Validation for empty fields
        if (formdata.firstName === "" || formdata.lastName === "" || formdata.email === "") {
            setErrors({
                firstName: formdata.firstName === "",
                lastName: formdata.lastName === "",
                email: formdata.email === "",
            });
            console.log("Please enter all fields.");
            return;
        }

        // Validation for regex
        if (!regexFirstName.test(formdata.firstName)) {
            setErrors((prevErrors) => ({ ...prevErrors, firstName: true }));
            console.log("Invalid First Name");
            return;
        }
        if (!regexFirstName.test(formdata.lastName)) {
            setErrors((prevErrors) => ({ ...prevErrors, lastName: true }));
            console.log("Invalid Last Name");
            return;
        }

        if (!regexEmail.test(formdata.email)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: true }));
            console.log("Invalid Email");
            return;
        }

        // If all validations pass, log the form data and reset the form
        console.log(formdata);
        setFormdata({
            firstName: "",
            lastName: "",
            email: "",
        });
    };

    return (
        <section className="py-5" id="form_validation">
            <div className="container d-flex align-items-center justify-content-center">
                <form
                    className="d-flex flex-column gap-4 justify-content-center w-25 position-relative"
                    onSubmit={formSubmit}
                >
                    <input
                        type="text"
                        placeholder="First Name"
                        value={formdata.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                    />
                    {errors.firstName && (
                        <p className="text-danger position-absolute error_one start-0 mb-0">
                            {formdata.firstName === ""
                                ? "Please enter your First Name."
                                : "Invalid First Name"}
                        </p>
                    )}

                    <input
                        type="text"
                        placeholder="Last Name"
                        value={formdata.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                    />
                    {errors.lastName && (
                        <p className="text-danger position-absolute error_two start-0 mb-0">
                            {formdata.lastName === ""
                                ? "Please enter your Last Name."
                                : "Invalid Last Name"}
                        </p>
                    )}

                    <input
                        type="email"
                        placeholder="Your Email"
                        value={formdata.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                    {errors.email && (
                        <p className="text-danger position-absolute error_three start-0 mb-0">
                            {formdata.email === "" ? "Please enter your Email." : "Invalid Email"}
                        </p>
                    )}

                    <input type="submit" />
                </form>
            </div>
        </section>
    );
};

export default FormValidation;
