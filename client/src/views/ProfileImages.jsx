import React, { useEffect } from "react"
import axios from "axios"
import { navigate } from "@reach/router"

import NavBar from "../components/NavBar"

const ProfileImages = () => {


    return (
        <div>
            <NavBar />
            <body className="bg-dark">
                <div className="d-flex justify-center">

                    <div className="box1">
                        <a href="/profile/picture/select">
                            <img
                                className=""
                                src="https://www.graphicsprings.com/filestorage/stencils/18caf1005c4eedca8b833788e88e53bc.svg"
                                alt="1"
                            />
                        </a>
                    </div>

                    <a href="/profile/picture/select">
                        <img
                            className=""
                            src="https://www.graphicsprings.com/filestorage/stencils/18caf1005c4eedca8b833788e88e53bc.svg"
                            alt="1"
                        />
                    </a>

                    <a href="/profile/picture/select">
                        <img
                            className=""
                            src="https://www.graphicsprings.com/filestorage/stencils/18caf1005c4eedca8b833788e88e53bc.svg"
                            alt="1"
                        />
                    </a>

                    <a href="/profile/picture/select">
                        <img
                            className=""
                            src="https://www.graphicsprings.com/filestorage/stencils/18caf1005c4eedca8b833788e88e53bc.svg"
                            alt="1"
                        />
                    </a>
                </div>

            </body>
        </div>
    )
}

export default ProfileImages