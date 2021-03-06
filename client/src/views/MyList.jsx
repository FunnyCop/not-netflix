import React, { useState, useEffect } from "react"
import axios from "axios"

import "../static/css/MyList.css"

const MyList = () => {
    const[media, setMedia] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/user/list')
            .then(res=>{
                console.log(res)
                setMedia(res.data.results);
            });
    }, [])

    return (
        <div id="MyList">
            <div className="contentWrapper">
                {media.map((item, idx)=>{
                    return <div id="content"><img id="mediaIMG"  src={`${item.image}`}/></div>
                })}
            </div>
        </div>
    )
}

export default MyList