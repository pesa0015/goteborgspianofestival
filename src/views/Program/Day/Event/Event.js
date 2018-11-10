import React from 'react'
import EventButton from './EventButton'
import sanitize from './../../../../services/sanitize'

export const Event = ({event, year}) => {
    return (
        <div className="event-card">
            <div className="left">
                <span className="begins">{event.start} - </span>
                <span className="ends">{event.end}</span>
            </div>
            <div className="right">
                <div className="event">
                    <EventButton event={event} year={year}/>
                </div>
                <div className="description" dangerouslySetInnerHTML={{__html: sanitize(event.description)}}></div>
                {event.room ? (
                        <div className="place">{event.location}, {event.room}</div>
                    ) : <div className="place">{event.location}</div>
                }
            </div>
            {/*<div className="right">
                <?php if (get_field('page_link', $id)) : ?>
                <div className="event">
                    <?php if (get_field('anchor', $id)) :
                        $anchor = get_field('anchor', $id);
                        $page_link = get_field('page_link', $id) . '#' . substr($anchor, 35, -1);
                        $a = get_field('event', $id); ?>
                        <a href="<?php echo $page_link; ?>" className="tooltip" title="Läs mer" target="_blank"><?php echo $a; ?></a>
                    <?php else :
                        $link = get_field('page_link', $id);
                        $a = get_field('event', $id); ?>
                        <a href="<?php echo $link; ?>" className="tooltip" title="Läs mer" target="_blank"><?php echo $a; ?></a>
                    <?php endif; ?>
                    <div className="underline-dotted"></div>
                </div>
                <?php else : ?>
                <div className="event"><?php the_field('event', $id); ?></div>
                <?php endif; ?>
                <?php if (get_field('description_' . $_SESSION['lang'], $id)) : ?>
                <div className="description"><?php the_field('description_' . $_SESSION['lang'], $id); ?></div>
                <?php endif; ?>
                <div className="place"><?php the_field('place', $id); ?></div>
            </div>*/}
        </div>
    );
}

export default Event;
