import React, { Component } from 'react'
import { I18n } from 'react-i18next'
import './Contact.css'

class Contact extends Component {
    render() {
        return (
            <I18n>
                {
                  (t) => (
                        <div id="contact">
                            <div id="left-content">
                                <h2>{t('contactTitle')}<br />Ha-Young Sul</h2>
                                <div>info@goteborgspianofestival.com</div>
                            </div>
                            <div id="right-content">
                                <img src="https://goteborgspianofestival.com/wp-content/uploads/2018/07/JPH1484.jpg" alt="Ha-Young Sul"/>
                            </div>
                        </div>
                    )
                }
            </I18n>
        );
    }
}

export default Contact;
