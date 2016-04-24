import configurationReducer from './reducers/configuration';
import dictionaryReducer from './reducers/dictionary';

export function tableApp(state, action) {
    return {
        dictionary: dictionaryReducer(state.dictionary, action),
        configuration: configurationReducer(state.configuration, action),
    };
}

export default tableApp;