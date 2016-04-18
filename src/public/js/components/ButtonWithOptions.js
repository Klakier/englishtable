import React, { PropTypes } from 'react';

const ButtonWithOptions = ({selectedOption, options, onChanged}) => {
    let menuOptions = [];
    for (let option of options) {
        menuOptions.push(
            <a key={ option.key } onClick={ (e) => onChanged(option.key) }>
                <li>{option.text}</li>
            </a>
            );
    };
    
    return (
    <div className='btn-group'>
        <a type='button' className='btn btn-primary dropdown-toggle' data-toggle='dropdown'>
            <span>{selectedOption.text}</span>
            <span className='caret' />
        </a>
        <ul className='dropdown-menu'>
            {menuOptions}
        </ul>
    </div>
    );
};

ButtonWithOptions.propTypes = {
    content: PropTypes.any.isRequired,
};

export default ButtonWithOptions;
