import { connect } from 'react-redux';
import Table from '../components/Table';
import {toArray} from './../../../Utils/conversions';

import {configurationColumnTypeChanged, configurationColumnNameChanged} from './../reducers/configuration';

const toRows = (sourceWords, destinationWords) => {
    if(sourceWords.length !== destinationWords.length) {
        throw 'Source words collection has different size then destination words collection';
    }
    
    let result = [];
    for(let i = 0; i<sourceWords.length; i++) {
        result.push({
            no: i +1,
            sourceWord: sourceWords[i],
            destinationWord: destinationWords[i]
        });
    }
    
    return result;
};

const mapStateToProps = (state, ownProps) => {
    return {
        headers: toArray(state.configuration, 'key'),
        rows: toRows(state.dictionary.output.sourceWords,state.dictionary.output.destinationWords)
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