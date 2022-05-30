import React, {Fragment} from 'react';

const DescriptionWLink = (props) => {
    return (
        <Fragment>
            <p>{props.descriptionWLink}</p>
            <a target="_blank" href={props.href}>{props.aDescription}</a>
            <br/>
        </Fragment>
    );
}

export default DescriptionWLink;