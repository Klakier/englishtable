/// <reference path="./../../../../typings/main.d.ts" />

import React, { PropTypes, Component } from 'react';


class ButtonWithOptions extends Component
{
    createOption(option) {
        const {
            onChanged,
        } = this.props;
        
        return (
            <a key={ option.key } onClick={ (e) => onChanged(option.key) }>
                <li>{option.text}</li>
            </a>
        );
    }

    getSelectedOptionText(selectedOption, options) {
        let option = options.find(v => v.key == selectedOption);

        return option.text;
    }

    render() {
        const { 
            selectedOption, options, onChanged,
        } = this.props;

        let menuOptions = [];
        for (let option of options) {
            menuOptions.push(this.createOption(option));
        }

        return (
            <div className='btn-group'>
                <a type='button' className='btn btn-primary dropdown-toggle' data-toggle='dropdown'>
                    <span>{this.getSelectedOptionText(selectedOption, options)}</span>
                    <span className='caret' />
                </a>
                <ul className='dropdown-menu'>
                    {menuOptions}
                </ul>
            </div>
        );
    };
}

ButtonWithOptions.propTypes = {
};

export default ButtonWithOptions;
