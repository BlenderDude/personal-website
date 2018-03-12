import React, {Component} from 'react'
import {connect} from 'react-redux'

import s from '../ContactModal.css'

import {updateFieldValue, updateFieldFocus, updateStage} from "../../actions/contact"

function calculateFieldClass(edited, focus, error) {
    if (!edited) return ''
    if (focus) {
        if (error) {
            return s.editingWithError
        }
    }
    if (error) {
        return s.error
    }
    return s.success

}

class ContactInfo extends Component {
    render() {
        const {stage, contactInfo, updateFieldValue, updateFieldFocus} = this.props
        const {firstName, lastName, email} = contactInfo
        const formContainsErrors = !firstName.ready || !lastName.ready || !email.ready
        return (
            <div className={[
                s.section,
                stage === "CONTACT_INFO" ? s.open : '',
            ].join(' ')}>
                <div className={s.row}>
                    <input
                        className={calculateFieldClass(firstName.edited, firstName.focused, firstName.error)}
                        type="text"
                        placeholder="First"
                        value={firstName.value}
                        onChange={(e) => updateFieldValue("firstName", e.target.value)}
                        onFocus={() => updateFieldFocus("firstName", true)}
                        onBlur={() => updateFieldFocus("firstName", false)}
                        disabled={stage !== "CONTACT_INFO"}
                    />
                    <input
                        className={calculateFieldClass(lastName.edited, lastName.focused, lastName.error)}
                        type="text"
                        placeholder="Last"
                        value={lastName.value}
                        onChange={(e) => updateFieldValue("lastName", e.target.value)}
                        onFocus={() => updateFieldFocus("lastName", true)}
                        onBlur={() => updateFieldFocus("lastName", false)}
                        disabled={stage !== "CONTACT_INFO"}
                    />
                </div>
                <div className={s.row}>
                    <input
                        className={calculateFieldClass(email.edited, email.focused, email.error)}
                        type="email"
                        placeholder="Email"
                        value={email.value}
                        onChange={(e) => updateFieldValue("email", e.target.value)}
                        onFocus={() => updateFieldFocus("email", true)}
                        onBlur={() => updateFieldFocus("email", false)}
                        disabled={stage !== "CONTACT_INFO"}
                    />
                </div>
                <div className={[s.row, s.contactOptions].join(' ')}>
                    <div className={[s.contactOption, formContainsErrors ? s.disabled : ''].join(' ')}
                         onClick={formContainsErrors ? null : () => this.props.updateStage("GENERAL_INQUIRY")}>
                        General Inquiry
                    </div>
                    <div className={[s.contactOption, formContainsErrors ? s.disabled : ''].join(' ')}
                         onClick={formContainsErrors ? null : () => this.props.updateStage("PROJECT_PROPOSAL")}>
                        Project Proposal
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    contactInfo: {
        firstName: state.contact.firstName,
        lastName: state.contact.lastName,
        email: state.contact.email,
    },
    stage: state.contact.stage,
})

const mapDispatchToProps = dispatch => ({
    updateFieldValue: (field, value) => dispatch(updateFieldValue(field, value)),
    updateFieldFocus: (field, focus) => dispatch(updateFieldFocus(field, focus)),
    updateStage: (stage) => dispatch(updateStage(stage))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactInfo)