import React from 'react'
import GrayImg from '../../shared/gray_img'
import DescriptionWLink from '../../shared/DescriptionWithLink/DescriptionWithLink'

const Planet = (props) => {
    let title
    if (props.titleUnderline) {
        title = <h4><u>{props.name}</u></h4>
    }else{
        title = <h4>{props.name}</h4>
    }

    return (
        <div>
            {title}
            <DescriptionWLink descriptionWLink={props.descriptionWLink} href={props.href} aDescription={props.aDescription}/>
            <GrayImg gray={props.gray} img_url={props.img_url}/>
            <hr/>
        </div>
    )
}

export default Planet;