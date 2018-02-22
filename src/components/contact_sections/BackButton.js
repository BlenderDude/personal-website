import React, {Component} from 'react'
import s from '../ContactModal.css'


export default class BackButton extends Component {
    render() {
        const {stage, closeModal, updateStage} = this.props
        return (
            <div
                className={[
                    s.backButton,
                    stage === "SUBMITTING" || stage === "SUBMITTED" ? s.hidden : '',
                    stage === "CONTACT_INFO" ? s.x : '',
                ].join(' ')}
                onClick={stage === "CONTACT_INFO" ? closeModal : () => updateStage(backTo(stage))}
            >
                <div className={s.barContainer}>
                    <div className={s.bar}/>
                    <div className={s.bar}/>
                </div>
                <div className={s.buttonTitlesContainer}>
                    <div
                        className={[
                            s.buttonTitle,
                            stage === "CONTACT_INFO" ? s.active : '',
                        ].join(' ')}
                    >
                        Close
                    </div>
                    <div
                        className={[
                            s.buttonTitle,
                            stage === "GENERAL_INQUIRY" || stage === "PROJECT_PROPOSAL" ? s.active : '',
                        ].join(' ')}
                    >
                        Contact Info
                    </div>
                </div>
            </div>
        )
    }
}

function backTo(stage) {
    if (stage === "GENERAL_INQUIRY" || stage === "PROJECT_PROPOSAL") {
        return "CONTACT_INFO"
    }
    if (stage === "SUBMITTING") {
        return "GENERAL_INQUIRY"
    }
}