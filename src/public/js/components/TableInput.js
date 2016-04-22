/// <reference path="./../../../../typings/main.d.ts" />

import React, { PropTypes, Component } from 'react';

export class TableInput extends Component {
    render() {
        return (
            <div>foobar</div>
        );
    };
}

TableInput.propTypes = {
    onInputChanged: PropTypes.func.isRequired,
};

export default TableInput;
