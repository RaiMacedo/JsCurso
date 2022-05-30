import React, {Fragment} from 'react'
import  './style.css'


const GrayImg = (props) => {
    return (
        <img class="gray-image" src={props.img_url}/>
    );
}

export default GrayImg;