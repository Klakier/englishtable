import * as objectInspections from './../../Utils/objectInspections';
var options = {
    Space: 'Empty',
    SequenceNumber: 'SequenceNumber',
    OrginalWord: 'Orginal word',
    TransalatedWord: 'Transalted word',
};

var key = 0;
var availableOptions = [];
for (let option of Object.keys(options)) {
    key++;
    availableOptions.push({
        key: key,
        text: options[option]
    });
}

var initialConfiguration = () => {
    return {
    1: {
            selectedOption: availableOptions[0],
            options: availableOptions,
        }, 
    2: {
            selectedOption: availableOptions[0],
            options: availableOptions,
        },
    3: {
            selectedOption: availableOptions[0],
            options: availableOptions,
        },
    4: {
            selectedOption: availableOptions[0],
            options: availableOptions,
        },
    5: {
            selectedOption: availableOptions[0],
            options: availableOptions,
        },
    };
};

export function input(previousState, action) {
    switch (action.type) {
        case 'TEXT_INPUT_CHANGED':
            return {
                inputText: action.text,
            };
    }
    return previousState;
}

export function configuration(state, action) {
    if (!objectInspections.isDefined(state)) {
        state = initialConfiguration();
    }
    
    switch (action.type) {
        case 'CONFIGURATION_CHANGED':
            var selectedOption = availableOptions.find(v => v.key === action.optionId);
            var column = {...state[action.columnId], selectedOption: selectedOption};
            var newState = {...state};
            newState[action.columnId] = column;
            return newState;
    }

    return state;
}

export function tableApp(state, action) {
    return {
        input: input(state.input, action),
        configuration: configuration(state.configuration, action)
    };
}

export default tableApp;