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
            navigate("/profile/edit");
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
                <form onSubmit={onSubmitHandler} className="d-flex justify-center">

                    <Link to="/profile/picture/select">
                        <img
                            onClick = {() => onClickHandler("1")}  
                            className = "profilePosition profileIcon"
                            src = {img1}
                            alt = "1"
                            name = "picture"
                            value = "1"
                        />
                    </Link>

                    <Link to="/profile/picture/select">
                        <img
                            onClick = {() => onClickHandler("2")}  
                            className = "profilePosition profileIcon"
                            src = {img2}
                            alt = "2"
                            name = "picture"
                            value = "2"
                        />
                    </Link>

                    <Link to="/profile/picture/select">
                        <img
                            onClick = {() => onClickHandler("3")}  
                            className = "profilePosition profileIcon"
                            src = {img3}
                            alt = "3"
                            name = "picture"
                            value = "3"
                        />
                    </Link>

                    <Link to="/profile/picture/select">
                        <img
                            onClick = {() => onClickHandler("4")}  
                            className = "profilePosition profileIcon"
                            src = {img4}
                            alt = "4"
                            name = "picture"
                            value = "4"
                        />
                    </Link>
                    <input type="text" value = "Let's do it!" className="btn btn-primary" />
                </form>

            </body>
        </div>
    )
}

export default ProfileImages