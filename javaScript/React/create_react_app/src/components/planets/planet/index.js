import React, {Fragment} from 'react'
import GrayImg from '../../shared/gray_img'
import DescriptionWLink from '../../shared/DescriptionWithLink/DescriptionWithLink'

const Planet = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <DescriptionWLink descriptionWLink={props.descriptionWLink} href={props.href} aDescription={props.aDescription}/>
            <GrayImg img_url={props.img_url}/>
        </div>
    )
}

export default Planet;