import React, { Component } from 'react'
import { connect } from 'react-redux'
import { I18n } from 'react-i18next'
import Sponsor from './Sponsor/Sponsor'
import './Sponsors.css'

class Sponsors extends Component {
    render() {
        return (
            <I18n>
                {
                  (t) => (
                    <div id="sponsors">
                        <h1 className="title">{t('sponsors')}</h1>
                        <div className="sponsors">
                            {this.props.sponsors.map(sponsor => {
                                return (
                                    <Sponsor key={sponsor.slug} sponsor={sponsor}/>
                                );
                            })}
                        </div>
                        <h1 id="partners-title" className="title">{t('partners')}</h1>
                        <div id="partners">
                            <span className="partner">Världskulturmuseet</span>
                            <span className="dot"></span>
                            <span className="partner">Högskolan för scen och musik</span>
                            <span className="dot"></span>
                            <span className="partner">GöteborgsOperan</span>
                        </div>
                    </div>
                    )
                }
            </I18n>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(Sponsors)
