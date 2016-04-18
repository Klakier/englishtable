/// <reference path="./../../../../typings/main.d.ts" />

import React, { PropTypes } from 'react';
import BtnWithOptions from './ButtonWithOptions';
import * as objectInspection from './../../../Utils/objectInspections';

const Table = ({ headers, rows, onHeaderChanged }) => {
    let optionChanged = (columnId) => {
        return (optionId) => {
            console.log('change' + columnId + optionId);
            onHeaderChanged({
                columnId: columnId,
                optionId: optionId
            });
        };
    };
    
    let tableHeaderColumn = headers.map( (h) => {
        return (
        <th key={h.key}>
            <BtnWithOptions selectedOption={h.selectedOption} options={h.options} onChanged={optionChanged(h.key)} />
        </th>
        );
    });
    
    let children = [];
    
    return (
        <table>
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
