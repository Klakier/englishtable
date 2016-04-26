/// <reference path="./../../../../typings/main.d.ts" />

import React, {PropTypes, Component} from 'react';
import TableInputRow from './TableInputRow';
import Btn from './Button';

export class TableInput extends Component {
    render() {
        let {onNewRowBtnClicked} = this.props;
        let rows = this.getRows();
        return (
            <div>
                <Btn content={'Add'} onClick={onNewRowBtnClicked}/>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Original</th>
                        <th>Translated</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
        );
    };

    getRows() {
        let {items, onRemoveRowClicked, onInputChanged} = this.props;
        var result = [];
        items.map((item) => {
            const {rowId, sourceWord, destinationWord} = item;
            result.push(
                <TableInputRow
                    key={rowId}
                    sourceWord={sourceWord}
                    destinationWord={destinationWord}
                    onRemoveBtnClicked={() => onRemoveRowClicked(rowId)}
                    onInputChanged={(source, destination) => onInputChanged(rowId, source, destination)}
                />
            )
        });


        return result;
    };
}

TableInput.propTypes = {
    items: PropTypes.array.isRequired,
    onRemoveRowClicked: PropTypes.func.isRequired,
    onNewRowBtnClicked: PropTypes.func.isRequired,
    onInputChanged: PropTypes.func.isRequired
};

export default TableInput;
