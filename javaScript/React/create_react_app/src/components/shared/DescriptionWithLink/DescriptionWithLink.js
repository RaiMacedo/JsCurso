import React, {Fragment} from 'react';

const DescriptionWLink = (props) => {

    if(!props.description){
        return null;
    }

    if(props.link){
        return (
            <Fragment>
                <p>{props.description}</p>
                <a target="_blank" href={props.link}>{props.link}</a>
                <br/>
            </Fragment>
        );
    }else{
        return(
            <Fragment>
                <p><u>{props.description}</u></p>
                <br/>
            </Fragment>    
        )
    }

}

export default DescriptionWLink;