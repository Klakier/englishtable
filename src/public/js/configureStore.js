import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import tableApp from './reducer';

const loggerMiddleware = createLogger();

export default function configureStore() {
    return createStore(
        tableApp, 
        {},
        compose(
            applyMiddleware( loggerMiddleware ),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ));
}