import React, { useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import NavBar from "../components/NavBar";

const AddProfile = () => {
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
            <div id = "ProfileAdd">
                <div id="updateUser" className="text-light d-flex justify-content-center align-middle pt-5">
                    <form onSubmit={onSubmitHandler} className="form-group">
                        <h2>Add Profile</h2>
                        <h4 className="text-muted">Add a profile for another person watching netflix</h4>
                        <h6 className="text-muted">------------------------------------------------------------------------------</h6>
                        {/* change image to default picture */}
                        <img className="col-2" src="https://www.graphicsprings.com/filestorage/stencils/18caf1005c4eedca8b833788e88e53bc.svg" alt="1"/>
                            <input className="col-5 mx-3"
                                onChange={onChangeHandler}
                                type="text"
                                name="username"
                                placeholder="name"
                            />
                        <h6 className="text-muted">-------------------------------------------------------------------------------</h6>
                        <input type="submit" value="Continue" className="btn btn-info mx-3" />
                        <a href="/home" className="btn btn-danger">Cancel</a>
                    </form>
                </div>
            </div>
    );
};

export default AddProfile;
