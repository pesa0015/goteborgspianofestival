import React, { Component } from 'react'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import Button from 'react-validation/build/button'
import Textarea from 'react-validation/build/textarea'
import { I18n } from 'react-i18next'
import Loading from './../../../services/loading'
import postApplicant from './../../../services/applicant'
import { required, email, integer } from './../rules'
import './../form.css'

class Volunteer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            age: null,
            address: null,
            mobileNumber: null,
            email: null,
            jobStudy: 0,
            aboutMe: null,
            driverLicense: 0,
            offerRoom: 0,
            availability: null,
            loading: false,
            success: false
        };

        this.handleNameChange          = this.handleNameChange.bind(this);
        this.handleAgeChange           = this.handleAgeChange.bind(this);
        this.handleAddressChange       = this.handleAddressChange.bind(this);
        this.handleMobileNumberChange  = this.handleMobileNumberChange.bind(this);
        this.handleEmailChange         = this.handleEmailChange.bind(this);
        this.handleJobStudyChange      = this.handleJobStudyChange.bind(this);
        this.handleAboutMeChange       = this.handleAboutMeChange.bind(this);
        this.handleDriverLicenseChange = this.handleDriverLicenseChange.bind(this);
        this.handleOfferRoomChange     = this.handleOfferRoomChange.bind(this);
        this.handleAvaibilityChange    = this.handleAvaibilityChange.bind(this);
        this.handleClick               = this.handleClick.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleAgeChange(event) {
        this.setState({age: event.target.value});
    }

    handleAddressChange(event) {
        this.setState({address: event.target.value});
    }

    handleMobileNumberChange(event) {
        this.setState({mobileNumber: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleJobStudyChange(event) {
        this.setState({"job/study": event.target.value});
    }

    handleAboutMeChange(event) {
        this.setState({aboutMe: event.target.value});
    }

    handleDriverLicenseChange(event) {
        this.setState({driverLicense: event.target.value});
    }

    handleOfferRoomChange(event) {
        this.setState({offerRoom: event.target.value});
    }

    handleAvaibilityChange(event) {
        this.setState({availability: event.target.value});
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({loading: true});
        
        let payload = Object.entries(this.state).map((key) => {
           return key[0] + '=' + key[1];
        }).join('&') + '&type=3';

        postApplicant(payload).then((response) => {
            this.setState({loading: false, success: true});
            window.scrollTo(0, 0);
        });
    }
    render() {
        return (
            <I18n>
                {
                  (t) => (
                    <div>
                        {
                            this.state.success ? (
                                <div id="success">
                                    <h1 className="title">Tack för din anmälan</h1>
                                </div>
                            ) : (
                            <div>
                                <div id="form-info">
                                    <h1 dangerouslySetInnerHTML={{__html: t('formApplyVolonteerTitle')}}></h1>
                                    <div dangerouslySetInnerHTML={{__html: t('formApplyVolonteerText')}}></div>
                                </div>
                                <Form>
                                    <div>
                                        <label htmlFor="name">{t('yourName')}</label>
                                        <Input type="text" name="name" id="name" onChange={this.handleNameChange} validations={[required]}/>

                                        <label htmlFor="age">{t('age')}</label>
                                        <Input name="age" id="age" onChange={this.handleAgeChange} validations={[required, integer]}/>

                                        <label htmlFor="address">{t('address')}</label>
                                        <Input name="address" id="address" onChange={this.handleAddressChange} validations={[required]}/>

                                        <label htmlFor="mobileNumber">{t('tel')}</label>
                                        <Input name="mobileNumber" id="mobileNumber" onChange={this.handleMobileChange} validations={[required]}/>
                                        
                                        <label htmlFor="email">{t('email')}</label>
                                        <Input name="email" id="email" onChange={this.handleEmailChange} validations={[required, email]}/>

                                        <label htmlFor="job/study">{t('jobStudy')}</label>
                                        <Input name="job/study" id="job/study" onChange={this.handleJobStudyChange} validations={[required]}/>

                                        <label htmlFor="aboutMe">{t('aboutMe')}:</label>
                                        <Textarea name="aboutMe" id="aboutMe" onChange={this.handleAboutMeChange}/>

                                        <div><span>Kryssa för alternativ nedan:</span></div>

                                        <label htmlFor="driverLicense">
                                            <input type="checkbox" name="driverLicense" id="driverLicense" onChange={this.handleDriverLicenseChange} value={this.state.participateMasterclass}/>
                                            {t('driverLicense')}?
                                        </label>

                                        <label htmlFor="shareRoom">
                                            <input type="checkbox" name="shareRoom" id="shareRoom" onChange={this.handleOfferRoomChange} value={this.state.participateConcert}/>
                                            {t('offerRoom')}?
                                        </label>

                                        <label htmlFor="availability">{t('availability')}?</label>
                                        <Textarea name="availability" id="availability" onChange={this.handleAvaibilityChange}/>
                                    </div>
                                    <div>
                                        {
                                            this.state.loading ? <Button><Loading/></Button> : <div><br /><div>{t('formApplyVolonteerBeforeSubmit')}</div><br /><br /><Button onClick={this.handleClick}>{t('send')}</Button></div>
                                        }
                                    </div>
                                </Form>
                            </div>
                        )
                    }
                    </div>
                )
            }
            </I18n>
        );
    }
}

export default Volunteer;
