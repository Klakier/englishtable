/// <reference path="./../../../../typings/main.d.ts" />

import React, {PropTypes, Component} from 'react';
import Button from './Button';

export class TableInputRow extends Component {
    onSourceWordChanged(e) {
        const {onInputChanged, destinationWord} = this.props;
        onInputChanged(e.target.value, destinationWord);
    }

    onDestinationWordChanged(e) {
        const {onInputChanged, sourceWord} = this.props;
        onInputChanged(sourceWord, e.target.value);
    }

    render() {
        const {sourceWord, destinationWord, onRemoveBtnClicked}=this.props;

        return (
            <tr>
                <td>
                    <input
                        className="source-word"
                        type="textbox"
                        data-ph="Orginal word"
                        onChange={e => this.onSourceWordChanged(e)}
                        value={sourceWord}/>
                </td>
                <td>
                    <input
                        className="destination-word"
                        type="textbox"
                        data-ph="Transalted word"
                        onChange={e => this.onDestinationWordChanged(e)}
                        value={destinationWord}/>
                </td>
                <td>
                    <Button onClick={onRemoveBtnClicked} content={"delete"}/>
                </td>
            </tr>
        );
    }
}

TableInputRow.propTypes = {
    sourceWord: PropTypes.string.isRequired,
    destinationWord: PropTypes.string.isRequired,
    onRemoveBtnClicked: PropTypes.func.isRequired,
    onInputChanged: PropTypes.func.isRequired
};

export default TableInputRow;
