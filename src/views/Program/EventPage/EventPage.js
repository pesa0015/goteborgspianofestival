import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { getEventPage } from './../../../services/eventPage'
import { addEventPage } from './../../../actions/eventPage'
import PianistThumbnail from './PianistThumbnail/PianistThumbnail'
import PianistProfile from './PianistProfile/PianistProfile'
import './PianistThumbnail/PianistThumbnail.css'
import './PianistProfile/PianistProfile.css'

class EventPage extends Component {
    constructor(props) {
        super(props);
        getEventPage(props.match.params.year, props.match.params.slug).then((response) => {
            this.props.dispatch(addEventPage(response.data));
        });
    }
    render() {
        if (typeof this.props.eventPage === 'undefined') {
            return null;
        }
        return (
            <div>
                <div id="thumbnails">
                    {this.props.eventPage.pianists.data.map((pianist, index) => {
                        return (
                            <PianistThumbnail key={index} pianist={pianist}/>
                        );
                    })}
                </div>
                <div id="top">
                    <h1>{this.props.eventPage.title}</h1>
                    <p id="p">{this.props.eventPage.description}</p>
                </div>
                {this.props.eventPage.pianists.data.map((pianist, index) => {
                    return (
                        <PianistProfile key={index} pianist={pianist}/>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    eventPage: _.find(state.eventPages, {'year': props.match.params.year, 'slug': props.match.params.slug})
});

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    addEventPage : () => dispatch(addEventPage),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage)
