/// <reference path="./../../../../typings/main.d.ts" />

import React, { PropTypes } from 'react';

const Header = ({header}) => {
    
    return (
        <div>
            {header}
        </div>
    );
};

Header.propTypes = {
  header: PropTypes.any.isRequired
};

export default Header;
