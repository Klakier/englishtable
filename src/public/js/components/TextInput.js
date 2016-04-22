import React, { PropTypes } from 'react';

const TextInput = ({ onInputChanged }) => {
    return (
        <div>
            <div>
                <textarea onChange={e => onInputChanged(e.target.value)} />
            </div>
        </div>
    );
};

TextInput.propTypes = {
    onInputChanged: PropTypes.func.isRequired,
};

export default TextInput;
