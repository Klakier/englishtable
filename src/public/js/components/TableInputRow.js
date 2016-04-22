/// <reference path="./../../../../typings/main.d.ts" />

import React, { PropTypes, Component } from 'react';
import Button from './Button';

export class TableInputRow extends Component {
    render() {
        const {sourceWord, destinationWord, onRemoveBtnClicked}=this.props;
        
        return (
            <tr>
                <td>
                    <div className="source-word" contentEditable="true" data-ph="Original word">
                        {sourceWord}
                    </div>
                </td>
                <td>
                    <div className="destination-word" contentEditable="true" data-ph="Translted word">
                        {destinationWord}
                    </div>
                </td>
                <td>
                    <Button onClick={onRemoveBtnClicked} content={"delete"} />
                </td>
            </tr>
        );
    }
}

TableInputRow.propTypes = {
    sourceWord: PropTypes.string.isRequired,
    destinationWord: PropTypes.string.isRequired,
    onRemoveBtnClicked: PropTypes.func.isRequired
};

export default TableInputRow;
