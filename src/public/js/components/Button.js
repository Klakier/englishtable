import React, { PropTypes } from 'react';

const Button = ({ content, onClick }) => {
    return (
    <div>
        <button type="button" onClick={onClick}>
            {content}
        </button>
    </div>
    );
};

Button.propTypes = {
  content: PropTypes.any.isRequired
}

export default Button;
