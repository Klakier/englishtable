import { EventEmitter } from 'events';
import Events from '../constans/EventTypes';
import Actions from '../constans/ActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';

class ColumnsConfigurationStore extends EventEmitter {
    emitConfigurationChanged() {
        this.emit(Events.COLUMNS_CONFIGURATION_CHANGED);
    }

    addConfigurationChangedListener(callback) {
        this.on(Events.COLUMNS_CONFIGURATION_CHANGED, callback);
    }

    removeConfigurationChangedListener(callback) {
        this.on(Events.COLUMNS_CONFIGURATION_CHANGED, callback);
    }

    getColumnsConfiguration() {
        
    }
    
    updateConfiguration(option) {
    }
}

ColumnsConfigurationStore.dispatchToken = AppDispatcher.register((action) => {
    switch (action.type) {
        case Actions.COLUMN_CONFIGURATION_CHANGED:
            ColumnsConfigurationStore.updateConfiguration(action.configuration);
            break;
    }
});