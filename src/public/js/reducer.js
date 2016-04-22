import configurationReducer from './reducers/configuration';
import inputReducer from './reducers/input';

export function tableApp(state, action) {
    return {
        input: inputReducer(state.input, action),
        configuration: configurationReducer(state.configuration, action)
    };
}

export default tableApp;