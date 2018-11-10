import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withCookies } from 'react-cookie'
import i18n from './../../i18n'
import http from './../../services/http'
import { listYears, listCurrentYear } from './../../actions/years'
import en from './../../assets/img/flags/en.png'
import sv from './../../assets/img/flags/sv.png'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import MobileMenu from './MobileMenu/MobileMenu'
import './Nav.css'
import OpenMenu from './../../assets/img/menu-red.png'
import CloseMenu from './../../assets/img/close-red.png'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {mobileMenuActive: false};
        this.props.dispatch(listCurrentYear());
        this.props.dispatch(listYears());
        this.changeLang = this.changeLang.bind(this);
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    setLang(lang) {
        const { cookies } = this.props;
        cookies.set('locale', lang, { path: '/' });
    }
    changeLang(e) {
        let lang = e.target.dataset.lang;
        this.setLang(lang);
        http.defaults.headers.common['Locale'] = lang;
        window.location.reload();
    }
    toggleMobileMenu() {
        this.setState({mobileMenuActive: this.state.mobileMenuActive ? false : true});
    }
    handleClick() {
        this.setState({mobileMenuActive: false});
    }
    render() {
        if (this.props.loading || !i18n.language) {
            return (
                <header>
                    <nav>
                    </nav>
                </header>
            );
        }

        let MenuButton = this.state.mobileMenuActive ? CloseMenu : OpenMenu;

        let flag;
        let changeLangTo;

        let lang = i18n.language.substr(0,2);

        switch (lang) {
            case 'sv':
                flag = en;
                changeLangTo = 'en';
                break;
            case 'en':
                flag = sv;
                changeLangTo = 'sv';
                break;
            default:
                flag = sv;
                changeLangTo = 'sv';
                break;
        }

        return (
            <header>
                <nav>
                    <Logo/>
                    <div id="flags">
                        <img src={flag} onClick={this.changeLang} className="flag" data-lang={changeLangTo} alt=""/>
                    </div>
                    <img id="menu-icon" className="only-mobile" onClick={this.toggleMobileMenu} src={MenuButton} alt="Menu"/>
                    <Menu years={this.props.years}/>
                    {
                        this.state.mobileMenuActive ? <MobileMenu handleClick={this.handleClick} currentYear={this.props.currentYear}/> : null
                    }
                </nav>
            </header>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    listYears       : () => dispatch(listYears),
    listCurrentYear : () => dispatch(listCurrentYear)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(Nav))
