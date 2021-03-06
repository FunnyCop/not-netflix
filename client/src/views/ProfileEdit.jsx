import React, { useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

import img1 from "../static/profileIMGs/1.PNG";
import img2 from "../static/profileIMGs/2.PNG";
import img3 from "../static/profileIMGs/3.PNG";
import img4 from "../static/profileIMGs/4.PNG";
import img5 from "../static/profileIMGs/5.PNG";


// import "../static/css/editprofile.css"

const EditProfile = () => {
    const [form, setForm] = useState({
        username: ""
    });
    // need a user route to assign picture/update??


    const onChangeHandler = (event) => {
        console.log("changing the things");
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/loggedin", {withCredentials: true})
            .then(res => {
                console.log(res.data)
                setForm(res.data)
            })
            .catch(err => console.log("error with the axios call", err))
    }, [])

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios
            .put(`http://localhost:8000/api/update/${form._id}`, form, {
                withCredentials: true,
            })
            .then((res) => {
                if (res.data.message === "Success!") {
                    console.log("edited successfully!")
                    navigate("/profile/edit");
                } 
                
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
            <div
                id="updateUser"
                className="text-light d-flex justify-content-center align-middle pt-5"
            >
                <div>
                    <form onSubmit={onSubmitHandler} className="form-group">
                        <h2 className="editProfile">Edit Profile</h2>
                        <h6 className="text-muted">
                        </h6>
                        {/* change image to default picture */}
                        <div className="mainBox">
                            <div className="inline-block ">
                                <a href="/profile/picture/select">
                                    <img className="profileIcon"
                    
                                    src= {  form.picture === "1" ? img1 :
                                            form.picture ==="2" ? img2 :
                                            form.picture === "3" ? img3 :
                                            form.picture ==="4" ? img4 :
                                            img5
                                        }
                                    />
                                </a>
                            </div>
                            <div className="rightSide">
                                <div className="editSection">
                                    <h6>Username:</h6>
                                    <input
                                        className="mb-2"
                                        onChange={onChangeHandler}
                                        type="text"
                                        name="username"
                                        value={form.username}
                                    />
                                </div>
                                <div className="editSection">
                                    <h6>Maturity Settings:</h6>
                                    <select className="mb-2" aria-label="Default select example">
                                        <option selected>Maturity Filter</option>
                                        <option value="MA">MA</option>
                                        <option value="R">R</option>
                                        <option value="PG13">PG-13</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="profile-button">
                            <Link to="/browse">
                                <input
                                    type="submit"
                                    value="Done"
                                    className="main"
                                />
                            </Link>
                            <Link to="/browse">
                                <input
                                    type="text"
                                    value="Cancel"
                                    className="cancel"
                                />
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default EditProfile;
