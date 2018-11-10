import React from 'react'

export const PianistThumbnail = ({pianist}) => {
    return (
        <div className="thumbnail">
            <img src={pianist.img} alt={pianist.name}/>
            <div>{pianist.name}</div>
        </div>
    );
};

export default PianistThumbnail;
