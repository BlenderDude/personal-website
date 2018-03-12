import React, {Component} from 'react'
import s from '../ContactModal.css'

export default class Submit extends Component {
    render() {
        const {stage, inquiry, description} = this.props
        return (
            <div className={[
                (stage === "GENERAL_INQUIRY" && inquiry.length >= 10)
                || (stage === "PROJECT_PROPOSAL" && description.length >= 10)
                || stage === "SUBMITTING"
                || stage === "SUBMITTED"
                    ? s.visible : '',
                s.submit,
                stage === "SUBMITTING" ? s.submitting : '',
                stage === "SUBMITTED" ? s.submitted : '',
            ].join(' ')}
                 onClick={this.props.submit}
            >
                {stage === "SUBMITTED" ? "Sent" : "Submit"}
            </div>
        )
    }
}