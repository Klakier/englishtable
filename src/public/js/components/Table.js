/// <reference path="./../../../../typings/main.d.ts" />

import React, { PropTypes } from 'react';
import BtnWithOptions from './ButtonWithOptions';
import * as objectInspection from './../../../Utils/objectInspections';

const Table = ({headers, rows, onOptionChanged, onColumnNameChanged}) => {
    let optionChanged = (columnId) => {
        return (optionId) => {
            onOptionChanged({
                columnId: columnId,
                optionId: optionId
            });
        };
    };
    
    let tableHeaderColumn = headers.map((h) => {
        let handleColumnNameChanged = (text) => {
            onColumnNameChanged(h.key, text);
        };
        
        return (
        <th key={h.key}>
            <input className="column-name-input" type="text" placeholder="column name" onChange={(e) => handleColumnNameChanged(e.target.value)}/>
            <BtnWithOptions selectedOption={h.selectedOption} options={h.options} onChanged={optionChanged(h.key)} />
        </th>
        );
    });
    
    let children = [];
    
    return (
        <table className="table">
            <thead>
                <tr>
                    {tableHeaderColumn}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    );
};

/*const Table = () => {
    return (
        <div> foobar </div>
    );
}*/

Table.propTypes = {
  headers: PropTypes.any.isRequired
}

export default Table;
