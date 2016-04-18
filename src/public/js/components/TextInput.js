import React, { PropTypes } from 'react';
import Btn from './Button';

const TextInput = ({ onChange, onInputAccepted }) => {
    return (
    <div>
        <div>
            <textarea onChange={e => onChange(e.target.value)} />
        </div>
        <Btn content={'Accept'} onClick={onInputAccepted} />
    </div>
    );
};

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onInputAccepted: PropTypes.func.isRequired
}

export default TextInput;
