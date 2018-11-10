import React, { Component } from 'react'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import Button from 'react-validation/build/button'
import { I18n } from 'react-i18next'
import sendMembership from './../../services/membership'
import { required, email } from './../Applicant/rules'
import './../Applicant/form.css'

class Membership extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            mobileNumber: null
        };

        this.handleNameChange         = this.handleNameChange.bind(this);
        this.handleEmailChange        = this.handleEmailChange.bind(this);
        this.handleMobileNumberChange = this.handleMobileNumberChange.bind(this);
        this.handleClick              = this.handleClick.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleMobileNumberChange(event) {
        this.setState({mobileNumber: event.target.value});
    }

    handleClick(e) {
        e.preventDefault();
        
        let payload = Object.entries(this.state).map((key) => {
           return key[0] + '=' + key[1];
        }).join('&');

        sendMembership(payload).then((response) => {
            console.log(response.data);
        });
    }
    render() {
        return (
            <I18n>
                {
                  (t) => (
                        <div>
                            <div id="form-info">
                                <h1 dangerouslySetInnerHTML={{__html: t('membershipTitle')}}></h1>
                                <div dangerouslySetInnerHTML={{__html: t('membershipText')}}></div>
                            </div>
                            <Form>
                                <div>
                                    <label htmlFor="name">{t('yourName')}</label>
                                    <Input type="text" name='name' id="name" onChange={this.handleNameChange} validations={[required]}/>
                                    
                                    <label htmlFor="email">{t('email')}</label>
                                    <Input type="email" name="email" id="email" onChange={this.handleEmailChange} validations={[required, email]}/>

                                    <label htmlFor="mobileNumber">{t('tel')}</label>
                                    <Input type="text" name="mobileNumber" id="mobileNumber" onChange={this.handleMobileNumberChange} validations={[required]}/>
                                </div>
                                <div>
                                    <Button onClick={this.handleClick}>{t('send')}</Button>
                                </div>
                            </Form>
                        </div>
                    
                    )
                }
            </I18n>
        );
    }
}

export default Membership;
