import React, { Component } from 'react'
import { connect } from 'react-redux'
import { I18n } from 'react-i18next'
import Member from './Member/Member'
import './Board.css'

class Board extends Component {
    render() {
        if (typeof this.props.boardMembers === 'undefined') {
            return null;
        }
        
        return (
            <I18n>
                {
                    (t) => (
            <div id="board">
                <h1>{t('boardOfAssociation')} / 2018-2019</h1>
                <div className="board-left">
                    <span className="underline">{t('boardLeader')}</span>
                    {this.props.boardMembers.leaders.map((member, index) => {
                        return (
                            <Member key={index} member={member}/>
                        );
                    })}
                    <span className="underline">{t('boardMembers')}:</span>
                    {this.props.boardMembers.members.map((member, index) => {
                        return (
                            <Member key={index} member={member}/>
                        );
                    })}
                    <span className="underline">{t('boardDeputies')}:</span>
                    {this.props.boardMembers.substitutes.map((member, index) => {
                        return (
                            <Member key={index} member={member}/>
                        );
                    })}
                </div>
                <div className="board-right">
                    <img src="https://goteborgspianofestival.com/wp-content/uploads/2016/07/styrelsen.png" alt="Styrelsen"/>
                </div>
            </div>
                    )
                }
            </I18n>
        );
    }
}

const mapStateToProps = (state) => ({
    boardMembers: state.boardMembers
});

export default connect(mapStateToProps)(Board)
