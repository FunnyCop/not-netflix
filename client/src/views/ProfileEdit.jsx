import React, { useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import NavBar from "../components/NavBar";


import "../static/css/editprofile.css"

const EditProfile = () => {
    const [form, setForm] = useState({
        username: "",
        picture: "",
    });
    // need a user route to assign picture/update??
    const [errors, setErrors] = useState({});

    const onChangeHandler = (event) => {
        console.log("changing the things");
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios
            .put("http://localhost:8000/api/users/:userId", form, {
                withCredentials: true,
            })
            .then((res) => {
                console.log(res);

                if (res.data.message === "Success!") {
                    navigate("/all");
                } else {
                    setErrors(res.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <NavBar />
            <body className="bg-dark">
                <div
                    id="updateUser"
                    className="text-light d-flex justify-content-center align-middle pt-5"
                >
                    <form onSubmit={onSubmitHandler} className="form-group">
                        <h2>Edit Profile</h2>
                        <h6 className="text-muted">
                            ------------------------------------------------------------------------------
                        </h6>
                        {/* change image to default picture */}
                        <div className="d-flex w-25 gap-5" id="">

                            <div className="inline-block ">
                                <a href="/profile/picture/select">
                                <img
                                    className=""
                                    src="https://www.graphicsprings.com/filestorage/stencils/18caf1005c4eedca8b833788e88e53bc.svg"
                                    alt="1"
                                />
                                </a>
                            </div>

                            <div className="col mx-3 pt-2">
                                <input
                                    className="mb-2"
                                    onChange={onChangeHandler}
                                    type="text"
                                    name="username"
                                    placeholder="name"
                                />
                                <input
                                    className="mb-2"
                                    onChange={onChangeHandler}
                                    type="text"
                                    name="background"
                                    placeholder="background"
                                />
                                <select className="mb-2" aria-label="Default select example">
                                    <option selected>Maturity Filter</option>
                                    <option value="MA">MA</option>
                                    <option value="R">R</option>
                                    <option value="PG13">PG-13</option>
                                </select>
                            </div>
                        </div>

                        <h6 className="text-muted">
                            -------------------------------------------------------------------------------
                        </h6>

                        <input
                            type="submit"
                            value="Continue"
                            className="btn btn-info mx-3"
                        />
                        <a href="/home" className="btn btn-danger">
                            Cancel
                        </a>
                    </form>
                </div>
            </body>
        </div>
    );
};

export default EditProfile;
