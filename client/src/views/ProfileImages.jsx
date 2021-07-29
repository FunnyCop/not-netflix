import React, { useEffect, useState } from "react"
import axios from "axios"
import { navigate } from "@reach/router"

import NavBar from "../components/NavBar"

const ProfileImages = () => {
    const [image, setImage] = useState({
        profileImage: ""
    })

    const onClickHandler = (event) => {
        console.log("selecting the images?")
        setImage({
            ...image,
            [event.target.name]:event.target.value
        })
    }

    return (
        <div>
            <NavBar />
            <body className="bg-dark">
                <div className="d-flex justify-center">

                    <div className="box1">
                        <a href="/profile/picture/select">
                            <img
                                onClick = {onClickHandler}
                                className=""
                                src="https://www.graphicsprings.com/filestorage/stencils/18caf1005c4eedca8b833788e88e53bc.svg"
                                alt="1"
                                name = "1"
                                value="1"
                            />
                        </a>
                    </div>

                    <a href="/profile/picture/select">
                        <img
                            onClick = {onClickHandler}  
                            className=""
                            src="https://www.graphicsprings.com/filestorage/stencils/18caf1005c4eedca8b833788e88e53bc.svg"
                            alt="2"
                            name = "2"
                            value="2"
                        />
                    </a>

                    <a href="/profile/picture/select">
                        <img
                            onClick = {onClickHandler}
                            className=""
                            src="https://www.graphicsprings.com/filestorage/stencils/18caf1005c4eedca8b833788e88e53bc.svg"
                            alt="3"
                            name = "3"
                            value="3"
                        />
                    </a>

                    <a href="/profile/picture/select">
                        <img
                            onClick = {onClickHandler}
                            className=""
                            src="https://www.graphicsprings.com/filestorage/stencils/18caf1005c4eedca8b833788e88e53bc.svg"
                            alt="3"
                            name = "3"
                            value="3"
                        />
                    </a>
                </div>

            </body>
        </div>
    )
}

export default ProfileImages