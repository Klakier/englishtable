/// <reference path="./../../../../typings/main.d.ts" />

import React, {PropTypes, Component} from 'react';

import BtnWithOptions from './../components/ButtonWithOptions';

class Table extends Component {
    createOptionChangedHandler(columnId) {
        const {onOptionChanged} = this.props;
        return (optionId) => {
            onOptionChanged({
                columnId: columnId,
                optionId: optionId
            });
        };
    }

    tableHeaderColumns() {
        const {headers, onColumnNameChanged} = this.props;

        return headers.map((h) => {
            let handleColumnNameChanged = (text) => {
                onColumnNameChanged(h.key, text);
            };

            return (
                <th key={h.key}>
                    <input className="column-name-input" type="text" placeholder="column name"
                           onChange={(e) => handleColumnNameChanged(e.target.value)}/>
                    <BtnWithOptions selectedOption={h.selectedOption} options={h.options}
                                    onChanged={this.createOptionChangedHandler(h.key)}/>
                </th>
            );
        });
    }

    static createRow(headers, row) {
        let columns = [];
        for (let header of headers) {
            switch (header.selectedOption) {
                case 1:
                    columns.push(<td key={header.key}>{row.sourceWord.text}</td>);
                    break;
                case 2:
                    columns.push(<td key={header.key}>{row.destinationWord.text}</td>);
                    break;
                default:
                    columns.push(<td key={header.key}/>)
            }
        }

        console.log(row.no);
        return (
            <tr key={row.no}>
                {columns}
            </tr>
        );
    }

    tableRows() {
        const {headers, rows} = this.props;
        return Array.from(rows.map(r => Table.createRow(headers, r)));
    }

    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    {this.tableHeaderColumns()}
                </tr>
                </thead>
                <tbody>
                {this.tableRows()}
                </tbody>
            </table>
        );
    };
}

Table.propTypes = {
    headers: PropTypes.any.isRequired,
    rows: PropTypes.array.isRequired
};

export default Table;
