import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Day from './Day/Day'
import './Day/Day.css'
import './Program.css'

class Program extends Component {
    render() {
        if (typeof this.props.year === 'undefined') {
            return null;
        }
        let year = this.props.year;
        
        return (      
            <div>
                {this.props.year.days.data.map((day, index) => {
                    return (
                        <Day key={day.date} day={day} year={year} lineBreak={index === 3}/>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    year: _.find(state.years, {'year': props.match.params.year})
});

export default connect(mapStateToProps)(Program)
