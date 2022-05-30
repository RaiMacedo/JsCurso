import React, {Fragment} from 'react';

const DescriptionWLink = (props) => {

    if(!props.descriptionWLink){
        return null;
    }

    if(props.href){
        return (
            <Fragment>
                <p>{props.descriptionWLink}</p>
                <a target="_blank" href={props.href}>{props.aDescription}</a>
                <br/>
            </Fragment>
        );
    }else{
        return(
            <Fragment>
                <p><u>{props.descriptionWLink}</u></p>
                <br/>
            </Fragment>    
        )
    }

}

export default DescriptionWLink;