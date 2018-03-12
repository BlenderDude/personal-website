const P = "CONTACT_"

const initialState = {
    stage: "SUBMITTED",
    firstName: {
        value: '',
        edited: false,
        error: false,
        ready: false,
    },
    lastName: {
        value: '',
        edited: false,
        error: false,
        ready: false,
    },
    email: {
        value: '',
        edited: false,
        error: false,
        ready: false,
    },
    inquiry: {
        value: '',
        edited: false,
        error: false,
        ready: false,
    },
    description: {
        value: '',
        edited: false,
        error: false,
        ready: false,
    },
    budget: {
        value: 0,
        edited: false,
        error: false,
        ready: false,
    },
    time: {
        value: 0,
        edited: false,
        error: false,
        ready: false,
    },
}

function contact(state = initialState, action) {
    const {type, field, data} = action
    switch (type) {
        case P + "UPDATE_STAGE":
            return {
                ...state,
                stage: data,
            }
        case P + "UPDATE_FOCUSED":
            return {
                ...state,
                [field]: {
                    ...state[field],
                    focused: data,
                },
            }
        case P + "UPDATE_VALUE":
            return {
                ...state,
                [field]: {
                    ...state[field],
                    value: data.value,
                    edited: true,
                    error: data.error,
                    ready: !data.error,
                },
            }
        default:
            return state
    }
}

export default contact