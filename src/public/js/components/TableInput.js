/// <reference path="./../../../../typings/main.d.ts" />

import React, {PropTypes, Component} from 'react';
import TableInputRow from './TableInputRow';
import Btn from './Button';

export class TableInput extends Component {
    render() {
        let rows = this.getRows();
        return (
            <div>
                <Btn content={'Add'} onClick={this.props.onNewRowBtnClicked}/>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Original</th>
                    </tr>
                    <tr>
                        <th>Translated</th>
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
        let {items, onRemoveRowClicked, onNewRowBtnClicked, onInputChanged} = this.props;
        var result = [];
        items.map((item) => {
            result.push(
                <TableInputRow
                    key={item.rowId}
                    sourceWord={item.sourceWord}
                    destinationWord={item.destinationWord}
                    onRemoveBtnClicked={() => onRemoveRowClicked(item.rowId)}
                    onInputChanged={(source, destination) => onInputChanged(item.rowId, source, destination)}
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
