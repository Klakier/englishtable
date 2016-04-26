/// <reference path="./../../../../typings/main.d.ts" />

import React, {PropTypes, Component} from 'react';
import {columnNames} from './../columnTypes';

class ButtonWithOptions extends Component {
    createOption(option) {
        const {onChanged} = this.props;

        return (
            <a key={ option.key } onClick={ (e) => onChanged(option.key) }>
                <li>{option.text}</li>
            </a>
        );
    }

    render() {
        const {
            selectedOption, options, onChanged,
        } = this.props;

        let menuOptions = [];
        for (let option of Object.keys(options)) {
            menuOptions.push(this.createOption({key: option, text: options[option]}));
        }

        return (
            <div className='btn-group'>
                <a type='button' className='btn btn-primary dropdown-toggle' data-toggle='dropdown'>
                    <span>{columnNames[selectedOption]}</span>
                    <span className='caret'/>
                </a>
                <ul className='dropdown-menu'>
                    {menuOptions}
                </ul>
            </div>
        );
    };
}

ButtonWithOptions.propTypes = {};

export default ButtonWithOptions;
