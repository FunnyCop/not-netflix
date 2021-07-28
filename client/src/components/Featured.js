import React, { useState } from 'react'
import "../static/css/Featured.css"


const Featured = () => {

    return (
        <div>
            <header class="v-header container">
                <div class="fullscreen-video-wrap">
                    <video autoPlay="true" loop="true" muted>
                        <source src={"/video.mp4"} type='video/mp4' />
                    </video>
                </div>
                <div class="header-content text-md-center">
                    <h1>W A V E S</h1>
                    <p>a story about waves or whatever</p>
                    <a class="btn btn-secondary">&#9655; play</a>
                </div>
            </header>
        </div>
    )
}


export default Featured