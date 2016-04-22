/// <reference path="./../../../../typings/main.d.ts" />

import React, { PropTypes, Component } from 'react';
import TableInputRow from './TableInputRow'

export class TableInput extends Component {
    render() {
        let rows = this.getRows();
        return (
            <table>
                <thead>
                    <tr>
                        Original
                    </tr>
                    <tr>
                        Translated
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    };
    
    getRows() {
        let {items, onRemoveRowClicked, onTableInputChanged} = this.props;
        var result = [];
        items.map((item) => {
            result.push(
                <TableInputRow 
                    key={item.key}
                    sourceWord={item.sourceWord}
                    destinationWord={item.destinationWord}
                    onRemoveBtnClicked={() => onRemoveRowClicked(item.key)}
                    onInputChanged={(source, destination) => onTableInputChanged(item.key, source, destination)}
                />
            )
        } );
        
        
        return result;
    };
}

TableInput.propTypes = {
    items: PropTypes.array.isRequired,
    onRemoveRowClicked: PropTypes.func.isRequired,
    onTableInputChanged: PropTypes.func.isRequired
};

export default TableInput;
