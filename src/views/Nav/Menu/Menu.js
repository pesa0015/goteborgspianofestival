import React from 'react'
import { Link } from 'react-router-dom'
import { I18n } from 'react-i18next'
import More from './../../../assets/img/more-red.png'
import './Menu.css'

const Menu = ({years}) => {
    return (
        <I18n>
        {
          (t) => (
        <ul>
            <li className="menu-item"><Link to="/program/2018/artister">{t('artists')}</Link></li>
            <li className="sub menu-item">
                <span>
                    <Link to="/#festivalprogram" className="go">{t('festivalprogram')}</Link>
                </span>
                <ul>
                    {years.map(year => {
                        return (
                            <li key={year.year}>
                                <Link to={"/program/" + year.year}>Program {year.year}</Link>
                            </li>
                        );
                    })}
                </ul>
            </li>
            <li className="menu-item"><Link to="/nyheter">{t('news')}</Link></li>
            <li id="participate" className="sub menu-item">
                <span>{t('apply')}</span>
                <ul id="signup">
                    <li id="volonteers" className="open-modal" data-modal="signup-volonteers">
                        <Link to="/anmalan/bli-volontar" className="sub-link">{t('applyVolonteer')}!</Link>
                    </li>
                    <li id="children" className="open-modal" data-modal="signup-children">
                        <Link to="/anmalan/barn-och-unga" className="sub-link">{t('applyYoung')} 6+</Link>
                    </li>
                    <li id="adults" className="open-modal" data-modal="signup-adults">
                        <Link to="/anmalan/hogre-niva" className="sub-link">{t('applyAdult')}</Link>
                    </li>
                </ul>
            </li>
            <li className="menu-item"><Link to="/sponsorer">{t('sponsors')}</Link></li>
            <li id="more" className="sub menu-item">
                <span>{t('more')} <img src={More} alt={t('more')}/></span>
                <ul>
                    <li>
                        <Link to="/kontakt" className="sub-link open-modal" data-modal="contact">{t('contact')}</Link>
                    </li>
                    <li>
                        <Link to="/bli-medlem" className="sub-link open-modal" data-modal="member">{t('membership')}</Link>
                    </li>
                    <li>
                        <Link to="/styrelsen" className="sub-link">{t('board')}</Link>
                    </li>
                </ul>
            </li>
        </ul>
        )}
        </I18n>
    );
};

export default Menu;
