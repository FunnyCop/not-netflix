import React, { useEffect, useState } from "react"
import axios from "axios"
import { navigate } from "@reach/router"
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

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("selecting the images?", event.target.value)
        axios
            .put(`http://localhost:8000/api/update/${form._id}`, form, {
                withCredentials: true,
            })
            .then((res) => {
                if (res.data.message === "Success!") {
                    console.log("edited successfully!")
                    navigate("/browse");
                } 
                
            })
            .catch((err) => {
                console.log(err);
            });
    }
    

    return (
        <div>
            <NavBar />
            <body className="bg-dark">
                <div className="d-flex justify-center">

                    <div className="box1">
                        <a href="/profile/picture/select">
                            <img
                                onSubmit = {onSubmitHandler}
                                className="profilePosition profileIcon"
                                src={img1}
                                alt="1"
                                name = "picture"
                                value="1"
                            />
                        </a>
                    </div>

                    <a href="/profile/picture/select">
                        <img
                            onSubmit = {onSubmitHandler}  
                            className="profilePosition profileIcon"
                            src={img2}
                            alt="2"
                            name = "picture"
                            value="2"
                        />
                    </a>

                    <a href="/profile/picture/select">
                        <img
                            onSubmit = {onSubmitHandler}
                            className="profilePosition profileIcon"
                            src={img3}
                            alt="3"
                            name = "picture"
                            value="3"
                        />
                    </a>

                    <a href="/profile/picture/select">
                        <img
                            onSubmit = {onSubmitHandler}
                            className="profilePosition profileIcon"
                            src={img4}
                            alt="4"
                            name = "picture"
                            value="4"
                        />
                    </a>
                </div>

            </body>
        </div>
    )
}

export default ProfileImages