class InputType {
    static init() {
        return {
            errors: [],
            selectedTab: 0
        };
    }

    static clearErrors(state) {
        return {
            ...state,
            errors: []
        }
    }

    static setErrors(state, errors) {
        return {
            ...state,
            errors: errors
        }
    }

    static trySwitchToTextMode(state) {
        if (InputType.hasErrors(state)) {
            return state;
        }

        return {
            ...state,
            selectedTab: 0
        };
    }

    static trySwitchToTableMode(state) {
        if (InputType.hasErrors(state)) {
            return state;
        }

        return {
            ...state,
            selectedTab: 1
        }
    }

    static hasErrors(state) {
        return state.errors.length != 0;
    }
}

export default InputType;
