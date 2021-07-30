import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link, navigate } from "@reach/router"
import img1 from "../static/profileIMGs/1.PNG";
import img2 from "../static/profileIMGs/2.PNG";
import img3 from "../static/profileIMGs/3.PNG";
import img4 from "../static/profileIMGs/4.PNG";
import "../static/css/ProfileIMG.css"

import NavBar from "../components/NavBar"

const ProfileImages = () => {
    const [form, setForm] = useState({
        picture: ""
    });

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/loggedin", {withCredentials: true})
            .then(res => {
                console.log(res)
                setForm(res.data)
            })
            .catch(err => console.log("error with the axios call", err))
    }, [])

    const onClickHandler = (event) => {
        axios.put(`http://localhost:8000/api/update/${form._id}`, {...form, picture: event}, {
            withCredentials: true,
        })
        .then(res => {
            setForm( { ...form, picture: event } )
        })
        .catch(err => console.log("error with the axios call", err))
    }

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
        <div>
            <NavBar />
            <body className="bg-dark">
                <form onSubmit={onSubmitHandler}>

                    <div className="profilePosition">
                        <img
                            onClick = {() => onClickHandler("1")}
                            className = "profileIcon"
                            src = {img1}
                            alt = "1"
                            name = "picture"
                            value = "1"
                        />
                        <img
                            onClick = {() => onClickHandler("2")}
                            className = "profileIcon"
                            src = {img2}
                            alt = "2"
                            name = "picture"
                            value = "2"
                        />
                        <img
                            onClick = {() => onClickHandler("3")}
                            className = "profileIcon"
                            src = {img3}
                            alt = "3"
                            name = "picture"
                            value = "3"
                        />
                        <img
                            onClick = {() => onClickHandler("4")}
                            className = "profileIcon"
                            src = {img4}
                            alt = "4"
                            name = "picture"
                            value = "4"
                        />
                    </div>
                    <div className="profile-button">
                        <Link to="/profile/edit">
                            <input type="text" value = "Let's do it!" className="btn btn-primary" />
                        </Link>
                    </div>
                </form>

            </body>
        </div>
    )
}

export default ProfileImages