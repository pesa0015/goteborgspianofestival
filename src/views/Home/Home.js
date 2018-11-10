import React, { Component } from 'react'
import { connect } from 'react-redux'
import { I18n } from 'react-i18next'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Home.css'
import './Footer.css'

const settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    fade: true,
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
};

class Home extends Component {
    render() {
        if (typeof this.props.currentYear.locations === 'undefined') {
            return null;
        }
        
        return (
            <I18n>
        {
          (t) => (
            <div id="start-content">
          <div id="start-background">
            <Slider {...settings}>
                {this.props.currentYear.locations.map(location => {
                    return (
                        <div key={location.name}>
                            <img src={location.img} alt=''/>
                        </div>
                    );
                })}
            </Slider>
            </div>
            <div id="slider-title" className="title">
                <span>{t('welcome')}</span>
                <br />
                <span>{this.props.currentYear.from} - {this.props.currentYear.to} {this.props.currentYear.month} {this.props.currentYear.year}</span>
                <div id="places">
                    {this.props.currentYear.locations.map((location, key) => {
                        return <span key={key} id={"place-" + (key + 1)}>{location.name}</span>
                    })}
                </div>
                <div id="count-down">
                    <div id="days-left">{this.props.currentYear.countdown}</div>
                    <div>{t('daysLeft')}</div>
                </div>
                <div id="bouncing-arrow" className="arrow bounce"></div>
            </div>
        <div id="releases">
            
        </div>
        <div id="footer">
            <div id="created-by">
                <span>
                    <span id="created-by-title">Sidan skapades av</span>
                    <br />
                    <a href="http://goteborgspianofestival.com/">Göteborgs Pianofestival</a>
                    <span className="dot"></span>
                    <a href="http://petersall.se/">petersall.se</a>
                </span>
            </div>
        </div>
        </div>
        )
        }
      </I18n>
        );
    }
}

const mapStateToProps = (state) => ({
    currentYear: state.currentYear
});

export default connect(mapStateToProps)(Home)
