import { connect } from 'react-redux';
import Table from './../components/Table';
import {toArray} from './../../../Utils/conversions';

import {configurationChanged} from './../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        headers: toArray(state.configuration, 'key'),
        rows: []
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return { 
        onHeaderChanged: (data) => dispatch(configurationChanged(data.columnId, data.optionId)),
    };
};

const Configuration = connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);

export default Configuration;