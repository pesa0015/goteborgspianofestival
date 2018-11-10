import React from 'react'

export const NewsItem = ({newsItem}) => {
    return (
        <div className="release">
            <hr />
            <div className="release-date">
                <span>{newsItem.createdAt}</span>
            </div>
            <span className="release-title">{newsItem.title}</span>
            {
                newsItem.banner !== null ? (
                    <img src={newsItem.banner} alt={newsItem.title}/>
                ) : null
            }
            <span className="release-message" dangerouslySetInnerHTML={{__html: newsItem.post}}></span>
        </div>
    );
}

export default NewsItem;
