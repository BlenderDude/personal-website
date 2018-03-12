import React, {Component} from 'react'
import {connect} from 'react-redux'

import s from './ContactModal.css'
import profilePhoto from '../img/profile_photo.jpg'
import ContactInfo from "./contact_sections/ContactInfo"
import {updateStage,submit} from "../actions/contact"
import GeneralInquiry from "./contact_sections/GeneralInquiry"
import Submit from "./contact_sections/Submit"
import BackButton from "./contact_sections/BackButton"
import ProjectProposal from "./contact_sections/ProjectProposal"

class ContactModal extends Component {

    _down(e) {
        this.downElement = e.target
    }

    _up(e) {
        if (e.target === this.downElement && e.target === e.currentTarget) {
            this.props.setContact(false)
        } else {
            this.downElement = null
        }
    }

    render() {
        const {
            open,
            stage,
            contactInfo,
            inquiry,
            updateStage,
            setContact,
            description,
        } = this.props
        const firstName = contactInfo.firstName.value
        const lastName = contactInfo.lastName.value
        return (
            <div
                className={[
                    s.background,
                    open ? s.open : ''
                ].join(' ')}
                onMouseDown={this._down.bind(this)}
                onMouseUp={this._up.bind(this)}
                onTouchStart={this._down.bind(this)}
                onTouchEnd={this._up.bind(this)}
                ref={ref => this.background = ref}
            >
                <div className={[
                    s.form,
                    stage === "SUBMITTED" ? s.submitted : '',
                    stage === "SUBMITTING" ? s.submitting : '',
                    stage === "PROJECT_PROPOSAL" ? s.projectProposal : '',
                ].join(' ')}>
                    <BackButton
                        stage={stage}
                        updateStage={updateStage}
                        closeModal={() => setContact(false)}
                    />
                    <div className={s.topBar}>
                        <div
                            className={[
                                s.profilePhoto,
                                stage === "SUBMITTING" ? s.submitting : '',
                                stage === "SUBMITTED" ? s.submitted : '',
                            ].join(' ')}>
                            <img src={profilePhoto} alt="Daniel Abdelsamed's Profile"/>
                        </div>
                    </div>
                    <div className={s.titleContainer}>
                        <div className={[s.title, stage === "CONTACT_INFO" ? s.active : ''].join(' ')}>
                            Contact Information
                        </div>
                        <div className={[s.title, stage === "GENERAL_INQUIRY" ? s.active : ''].join(' ')}>
                            {firstName} {lastName}'s Inquiry
                        </div>
                        <div className={[s.title, stage === "PROJECT_PROPOSAL" ? s.active : ''].join(' ')}>
                            {firstName} {lastName}'s Project Proposal
                        </div>
                    </div>
                    <div className={s.sectionContainer}>
                        <ContactInfo/>
                        <GeneralInquiry/>
                        <ProjectProposal/>
                    </div>
                    <Submit
                        stage={stage}
                        inquiry={inquiry.value}
                        description={description.value}
                        updateStage={updateStage}
                        submit={this.props.submit}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    contactInfo: {
        firstName: state.contact.firstName,
        lastName: state.contact.lastName,
    },
    inquiry: state.contact.inquiry,
    description: state.contact.description,
    stage: state.contact.stage,
})

const mapDispatchToProps = dispatch => ({
    updateStage: (stage) => dispatch(updateStage(stage)),
    submit: () => dispatch(submit()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactModal)