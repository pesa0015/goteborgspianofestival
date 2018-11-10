import React from 'react'
import { Link } from 'react-router-dom'

export const EventButton = ({event, year}) => {
    if (event.eventPage !== null && event.pianist !== null) {
        return (
            <Link to={"/program/" + year.year + "/" + event.eventPage + "#" + event.pianist} className="tooltip">{event.name}</Link>
        );
    } else if (event.eventPage !== null && event.pianist === null) {
        return (
            <Link to={"/program/" + year.year + "/" + event.eventPage} className="tooltip">{event.name}</Link>
        );
    } else {
        return ( event.name );
    }
};

export default EventButton;
