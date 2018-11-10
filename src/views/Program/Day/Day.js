import React from 'react'
import Event from './Event/Event'

export const Day = ({day, year, lineBreak}) => {
    const newRow = lineBreak ? ' break-row' : '';
    return (
        <div className={"day" + newRow}>
            <div className="date">
                <span className="day-number">{day.date}</span><span className="month">{day.month}</span>
            </div>
            {day.events.data.map((event, index) => {
                return (
                    <Event key={index} event={event} year={year}/>
                );
            })}
        </div>
    );
}

export default Day;
