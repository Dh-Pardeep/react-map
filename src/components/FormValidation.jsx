import React, { useState } from "react";

const FormValidation = () => {
    const [formdata, setFormdata] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const [error, setError] = useState(false);

    const formSubmit = (e) => {
        e.preventDefault();
        setError(false);
        if (
            formdata.firstName === "" ||
            formdata.lastName === "" ||
            formdata.email === ""
        ) {
            setError(true);
            return;
        }
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
                        onChange={(e) =>
                            setFormdata({ ...formdata, firstName: e.target.value })
                        }
                    />
                    {error && formdata.firstName === "" && (
                        <p className="text-danger  position-absolute error_one start-50 translate-middle-x ">First Name is required</p>
                    )}
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={formdata.lastName}
                        onChange={(e) =>
                            setFormdata({ ...formdata, lastName: e.target.value })
                        }
                    />
                    {error && formdata.lastName === "" && (
                        <p className="text-danger position-absolute error_two start-50 translate-middle-x">Last Name is required</p>
                    )}
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={formdata.email}
                        onChange={(e) =>
                            setFormdata({ ...formdata, email: e.target.value })
                        }
                    />
                    {error && formdata.email === "" && (
                        <p className="text-danger position-absolute error_three start-50 translate-middle-x">Email is required</p>
                    )}
                    <input type="submit" />
                </form>
            </div>
        </section>
    );
};

export default FormValidation;