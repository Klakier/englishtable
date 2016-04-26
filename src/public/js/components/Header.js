/// <reference path="./../../../../typings/main.d.ts" />

import React, { PropTypes } from 'react';
import BtnWithOptions from './ButtonWithOptions';
import * as objectInspection from './../../../Utils/objectInspections';

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
