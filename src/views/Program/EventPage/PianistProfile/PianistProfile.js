import React from 'react'
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'

configureAnchors({offset: -100, scrollDuration: 0});

export const PianistProfile = ({pianist}) => {
    return (
        <ScrollableAnchor id={pianist.slug}>
            <div className="pedagog">
                <img src={pianist.img} alt={pianist.name}/>
                <h1>{pianist.name}</h1>
                <p className="cv-text" dangerouslySetInnerHTML={{__html: pianist.bio}}></p>
            </div>
        </ScrollableAnchor>
    );
};

export default PianistProfile;
