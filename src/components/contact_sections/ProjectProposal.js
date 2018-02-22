import React, {Component} from 'react'
import {connect} from 'react-redux'
import s from '../ContactModal.css'
import {updateFieldFocus, updateFieldValue} from "../../actions/contact"
import Slider from "../Slider"

class ProjectProposal extends Component {
    render() {
        const {stage, description, budget, time, updateFieldValue, updateFieldFocus} = this.props
        const budgetValue = Math.floor((((budget.value * 100) + 1) ** 2 + 99) / 100) * 100
        const timeValue = Math.round(time.value * 83 + 7)
        let timeWords
        if (time.value === 0) {
            timeWords = "ASAP"
        } else if (time.value >= 0.97) {
            timeWords = "90+ days"
        } else {
            timeWords = timeValue + " days"

        }
        return (
            <div className={[
                s.section,
                stage === "PROJECT_PROPOSAL" ? s.open : '',
            ].join(' ')}>
                <div className={s.row}>
                    <textarea
                        className={[
                            s.text,
                            s.mediumText,
                            description.value.length > 0 ? s.visible : '',
                            description.value.length > 0 && description.edited ? s.close : '',
                            description.value.length >= 10 ? s.success : '',
                            description.value.length >= 950 ? s.close : '',
                            description.value.length === 1000 ? s.max : '',
                            stage !== "PROJECT_PROPOSAL" ? s.unselectable : '',
                        ].join(' ')}
                        onChange={e => updateFieldValue("description", e.target.value.substring(0, 1000))}
                        onInput={e => updateFieldValue("description", e.target.value.substring(0, 1000))}
                        onFocus={e => updateFieldFocus("description", true)}
                        onBlur={e => updateFieldFocus("description", false)}
                        value={description.value}
                        placeholder="Describe your project..."
                        disabled={stage !== "PROJECT_PROPOSAL"}
                    />
                    <div
                        className={[
                            s.counter,
                            description.value.length > 100 ? s.visible : '',
                            description.value.length >= 950 ? s.close : '',
                            description.value.length === 1000 ? s.max : ''
                        ].join(' ')}
                    >
                        {description.value.length}/1000
                    </div>
                </div>
                <div className={[s.row, s.center, s.largeMargin].join(' ')}>
                    <div
                        className={[s.sliderTitle].join(' ')}
                    >
                        <div className={s.offsetTitle}>
                            Project Budget
                        </div>
                        ${budgetValue >= 10000 ? "10,000+" : budgetValue.toLocaleString()}

                    </div>
                </div>
                <div className={[s.row]}>
                    <Slider
                        onChange={val => updateFieldValue('budget', val)}
                        value={budget.value}
                        leftLabel="$100"
                        rightLabel="$10,000+"
                    />
                </div>
                <div className={[s.row, s.center, s.largeMargin].join(' ')}>
                    <div
                        className={[s.sliderTitle].join(' ')}
                    >
                        <div className={s.offsetTitle}>
                            Project Duration
                        </div>
                        {timeWords}

                    </div>
                </div>
                <div className={[s.row]}>
                    <div style={{width: '100%'}}>
                        <Slider
                            onChange={val => updateFieldValue('time', val)}
                            value={time.value}
                            leftLabel="ASAP"
                            rightLabel="90+ days"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    description: state.contact.description,
    budget: state.contact.budget,
    time: state.contact.time,
    stage: state.contact.stage,
})

const mapDispatchToProps = dispatch => ({
    updateFieldValue: (field, value) => dispatch(updateFieldValue(field, value)),
    updateFieldFocus: (field, focus) => dispatch(updateFieldFocus(field, focus)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectProposal)