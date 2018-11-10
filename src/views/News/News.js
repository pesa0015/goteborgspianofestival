import React, { Component } from 'react'
import { connect } from 'react-redux'
import { I18n } from 'react-i18next'
import NewsItem from './NewsItem/NewsItem'
import './News.css'

class News extends Component {
    render() {
        if (typeof this.props.news === 'undefined') {
            return null;
        }
        
        return (
            <I18n>
                {
                  (t) => (
                    <div id="releases">
                        <h1>{t('news')}</h1>
                        {this.props.news.map((newsItem, index) => {
                            return (
                                <NewsItem key={index} newsItem={newsItem}/>
                            );
                        })}
                    </div>
                )}
            </I18n>
        );
    }
}

const mapStateToProps = (state) => ({
    news: state.news
});

export default connect(mapStateToProps)(News)
