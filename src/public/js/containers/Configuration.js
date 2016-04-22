import { connect } from 'react-redux';
import Table from './../components/Table';
import {toArray} from './../../../Utils/conversions';

import {configurationColumnTypeChanged, configurationColumnNameChanged} from './../reducers/configuration';

const mapStateToProps = (state, ownProps) => {
    return {
        headers: toArray(state.configuration, 'key'),
        rows: []
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return { 
        onOptionChanged: (data) => dispatch(configurationColumnTypeChanged(data.columnId, data.optionId)),
        onColumnNameChanged: (id, name) => dispatch(configurationColumnNameChanged(id, name)),
    };
};

const Configuration = connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);

export default Configuration;