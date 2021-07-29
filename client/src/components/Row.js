import "../static/css/Row.css"
import React, { useState, useEffect} from 'react'
import axios from "axios"
const $ = require("jquery")


const Row = (props) => {

    const [allMovies, setAllMovies] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8000/api/browse/${props.title}/${props.type}`)
            .then(res => {
                console.log("logging response!!", res)
                setAllMovies(res.data.results)
            })
            .catch(err => console.log("errorrr with axios call", err))
    })

    const leftClick = (element) => {
        console.log("left button")
        $(`#${element}`).animate({
            scrollLeft: "-=300px"
        }, "slow");
    }

    const rightClick = (element) => {
        console.log("right button")
        $(`#${element}`).animate({
            scrollLeft: "+=300px"
        }, "slow");
    }


    return (
        <div className="body">
            <h2> {props.NetflixOriginal ? "Not-Netflix Originals" : props.title} </h2>

            <div className="center" id={props.title}>
                <button onClick={() => leftClick(props.title)}  id="left-button" className="btn-sm btn-info">
                    swipe left
                </button>

                <button onClick={() => rightClick(props.title)} id="right-button" className="btn-sm btn-info">
                    swipe right
                </button>

                {allMovies.map((q, i) => {
                    return <div key={i} className="internal">
                        <span className="blinds">
                        <img src={q.image} className={props.isLargeRow ? "netflix-original" : "row-poster"} alt="mapped but no">
                        </img>
                        <p>{q.title}</p>
                        </span>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Row;