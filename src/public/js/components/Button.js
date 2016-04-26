import React, {PropTypes} from 'react';

const Button = ({content, onClick}) => {
    return (
        <div>
            <button type="button" onClick={onClick}>
                {content}
            </button>
        </div>
    );
};

Button.propTypes = {
    content: PropTypes.any.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;
