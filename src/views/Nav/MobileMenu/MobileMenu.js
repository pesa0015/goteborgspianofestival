import React from 'react'
import { Link } from 'react-router-dom'
import { I18n } from 'react-i18next'
import './MobileMenu.css'

const MobileMenu = ({currentYear, handleClick}) => {
    return (
        <I18n>
        {
          (t) => (
            <ul id="mobile-menu">
                <li className="menu-item">
                    <Link to="/artister" onClick={handleClick}>{t('artists')}</Link>
                </li>
                <li className="menu-item">
                    <Link to={"/program/" + currentYear.year} onClick={handleClick}>Program {currentYear.year}</Link>
                </li>
                <li className="menu-item">
                    <Link to="/nyheter" onClick={handleClick}>{t('news')}</Link>
                </li>
                <li className="menu-item">
                    <Link to="/sponsorer" onClick={handleClick}>{t('sponsors')}</Link>
                </li>
                <li className="menu-item">
                    <Link to="/kontakt" onClick={handleClick}>{t('contact')}</Link>
                </li>
                <li className="menu-item">
                    <Link to="/styrelsen" onClick={handleClick}>{t('board')}</Link>
                </li>
            </ul>
        )}
        </I18n>
    );
};

export default MobileMenu;
