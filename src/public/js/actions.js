export const textInputChanged = (text) => {
    return {
        type: 'TEXT_INPUT_CHANGED',
        text: text,
    };
};

export const inputAccepted = () => {
    return {
        type: 'INPUT_ACCEPTED',
    };
};

export const configurationChanged = (columnId, optionId) => {
    return {
        type: 'CONFIGURATION_CHANGED',
        columnId: columnId,
        optionId: optionId,
    };
};
