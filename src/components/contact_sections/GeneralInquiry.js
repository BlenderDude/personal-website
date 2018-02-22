import React, {Component} from 'react'
import {connect} from 'react-redux'

import s from '../ContactModal.css'
import {updateFieldFocus, updateFieldValue} from "../../actions/contact"

class GeneralInquiry extends Component {
    render() {
        const {stage, inquiry, updateFieldValue, updateFieldFocus} = this.props
        return (
            <div className={[
                s.section,
                stage === "GENERAL_INQUIRY" ? s.open : '',
            ].join(' ')}>
                <div className={s.row}>
                    <textarea
                        className={[
                            s.text,
                            s.largeText,
                            inquiry.value.length > 0 ? s.visible : '',
                            inquiry.value.length > 0 && inquiry.edited ? s.close : '',
                            inquiry.value.length >= 10 ? s.success : '',
                            inquiry.value.length >= 950 ? s.close : '',
                            inquiry.value.length === 1000 ? s.max : '',
                            stage !== "GENERAL_INQUIRY" ? s.unselectable : '',
                        ].join(' ')}
                        onChange={e => updateFieldValue(e.target.value.substring(0, 1000))}
                        onInput={e => updateFieldValue(e.target.value.substring(0, 1000))}
                        onFocus={e => updateFieldFocus(true)}
                        onBlur={e => updateFieldFocus(false)}
                        value={inquiry.value}
                        placeholder="Inquire..."
                        disabled={stage !== "GENERAL_INQUIRY"}
                    />
                    <div
                        className={[
                            s.counter,
                            inquiry.value.length > 100 ? s.visible : '',
                            inquiry.value.length >= 950 ? s.close : '',
                            inquiry.value.length === 1000 ? s.max : ''
                        ].join(' ')}
                    >
                        {inquiry.value.length}/1000
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    inquiry: state.contact.inquiry,
    stage: state.contact.stage,
})

const mapDispatchToProps = dispatch => ({
    updateFieldValue: (value) => dispatch(updateFieldValue("inquiry", value)),
    updateFieldFocus: (focus) => dispatch(updateFieldFocus("inquiry", focus))
})

export default connect(mapStateToProps, mapDispatchToProps)(GeneralInquiry)