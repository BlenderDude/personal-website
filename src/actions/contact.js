import validator from 'validator'
import store from '../store'

const P = "CONTACT_"

export function updateFieldValue(field, value) {
    return dispatch => {
        let error
        if (field === "email") {
            error = !validator.isEmail(value)
        } else if (field === "budget") {
            error = false
        } else if (field === "time") {
            error = false
        } else {
            error = !validator.isLength(value, {min: 1, max: 30})
        }
        dispatch(updateValue(field, value, error))
    }
}

export function updateFieldFocus(field, focus) {
    return dispatch => {
        dispatch(updateFocused(field, focus))
    }
}

export function submit() {
    return dispatch => {
        const inquiryType = store.getState().contact.stage === "GENERAL_INQUIRY" ? "INQUIRY" : "PROPOSAL"
        dispatch({
            type: P + "UPDATE_STAGE",
            data: "SUBMITTING",
        })
        fetch('/inquiry', {
            method: "POST",
            body: JSON.stringify({
                ...store.getState().contact,
                stage: inquiryType,
            })
        }).then(() => {
            dispatch({
                type: P + "UPDATE_STAGE",
                data: "SUBMITTED",
            })
        }).catch(() => {
            dispatch({
                type: P + "UPDATE_STAGE",
                data: "SUBMITTED",
            })
        })
    }
}

function updateValue(field, value, error) {
    return {
        type: P + "UPDATE_VALUE",
        field,
        data: {
            value,
            error,
        },
    }
}

function updateFocused(field, value) {
    return {
        type: P + "UPDATE_FOCUSED",
        field,
        data: value,
    }
}

export function updateStage(data) {
    return dispatch => {
        dispatch({
            type: P + "UPDATE_STAGE",
            data,
        })
    }
}