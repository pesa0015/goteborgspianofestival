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

class Adult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            age: null,
            email: null,
            mobileNumber: null,
            allergies: null,
            teacherName: null,
            // teacherMobileNumber: null,
            participateMasterclass: 0,
            participateConcert: 0,
            playMasterclass: null,
            playConcert: null,
            loading: false,
            success: false
        };

        this.handleNameChange                   = this.handleNameChange.bind(this);
        this.handleAgeChange                    = this.handleAgeChange.bind(this);
        this.handleEmailChange                  = this.handleEmailChange.bind(this);
        this.handleMobileNumberChange           = this.handleMobileNumberChange.bind(this);
        this.handleAllergiesChange              = this.handleAllergiesChange.bind(this);
        this.handleTeacherNameChange            = this.handleTeacherNameChange.bind(this);
        // this.handleTeacherMobileNumberChange    = this.handleTeacherMobileNumberChange.bind(this);
        this.handleParticipateMasterclassChange = this.handleParticipateMasterclassChange.bind(this);
        this.handleParticipateConcertChange     = this.handleParticipateConcertChange.bind(this);
        this.handlePlayMasterclassChange        = this.handlePlayMasterclassChange.bind(this);
        this.handleplayConcertChange            = this.handleplayConcertChange.bind(this);
        this.handleClick                        = this.handleClick.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleAgeChange(event) {
        this.setState({age: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleMobileNumberChange(event) {
        this.setState({mobileNumber: event.target.value});
    }

    handleAllergiesChange(event) {
        this.setState({allergies: event.target.value});
    }

    handleTeacherNameChange(event) {
        this.setState({teacherName: event.target.value});
    }

    // handleTeacherMobileNumberChange(event) {
    //     this.setState({teacherMobileNumber: event.target.value});
    // }

    handleParticipateMasterclassChange(event) {
        this.setState({handleParticipateMasterclassChange: event.target.value});
    }

    handleParticipateConcertChange(event) {
        this.setState({handleParticipateConcertChange: event.target.value});
    }

    handlePlayMasterclassChange(event) {
        this.setState({handlePlayMasterclassChange: event.target.value});
    }

    handleplayConcertChange(event) {
        this.setState({handleplayConcertChange: event.target.value});
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({loading: true});
        
        let payload = Object.entries(this.state).map((key) => {
           return key[0] + '=' + key[1];
        }).join('&') + '&type=1';

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
                                <h1 dangerouslySetInnerHTML={{__html: t('formApplyAdultTitle')}}></h1>
                                <div dangerouslySetInnerHTML={{__html: t('formApplyAdultText')}}></div>
                            </div>
                            <Form>
                                <div>
                                    <label htmlFor="name">{t('yourName')}</label>
                                    <Input type="text" name='name' id="name" onChange={this.handleNameChange} validations={[required]}/>

                                    <label htmlFor="age">{t('age')}</label>
                                    <Input name='age' id="age" onChange={this.handleAgeChange} validations={[required, integer]}/>
                                    
                                    <label htmlFor="email">{t('email')}</label>
                                    <Input name='email' id="email" onChange={this.handleEmailChange} validations={[required, email]}/>
                                    
                                    <label htmlFor="mobileNumber">{t('tel')}</label>
                                    <Input name='mobileNumber' id="mobileNumber" onChange={this.handleMobileChange} validations={[required]}/>
                                    
                                    <label htmlFor="allergies">{t('foodAllergies')} ({t('optional')})</label>
                                    <Input name='allergies' id="allergies" onChange={this.handleAllergiesChange}/>
                                    
                                    <label htmlFor="teacherName">{t('nameOfTeacher')}</label>
                                    <Input name='teacherName' id="teacherName" onChange={this.handleTeacherNameChange} validations={[required]}/>

                                    {/*<label htmlFor="teacherMobileNumber">{t('teacherMobileNumber')}</label>
                                    <Input name='teacherMobileNumber' id="teacherMobileNumber" onChange={this.handleTeacherMobileNumberChange} validations={[required]}/>*/}
                                    
                                    <label htmlFor="participateMasterclass">
                                        <input type="checkbox" name="participateMasterclass" id="participateMasterclass" onChange={this.handleParticipateMasterclassChange} value={this.state.participateMasterclass}/>
                                        {t('participateMasterclass')}
                                    </label>

                                    <label htmlFor="participateConcert">
                                        <input type="checkbox" name="participateConcert" id="participateConcert" onChange={this.handleParticipateConcertChange} value={this.state.participateConcert}/>
                                        {t('participateConcert')}
                                    </label>

                                    <label htmlFor="toPlayOnMasterClass">{t('toPlayOnMasterClass')}? ({t('optional')})</label>
                                    <Textarea name='toPlayOnMasterClass' id="toPlayOnMasterClass" onChange={this.handlePlayMasterclassChange}/>
                                    
                                    <label htmlFor="toPlayOnConcert">{t('toPlayOnConcert')}? ({t('optional')})</label>
                                    <Textarea name='toPlayOnConcert' id="toPlayOnConcert" onChange={this.handlePlayConcertChange}/>
                                </div>
                                <div>
                                    {
                                        this.state.loading ? <Button><Loading/></Button> : <Button onClick={this.handleClick}>{t('send')}</Button>
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

export default Adult;
