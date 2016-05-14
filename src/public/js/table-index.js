/// <reference path="../../../typings/main.d.ts" />

import '../css/main.css'
import '../css/printer.css'

import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';

render(
    <Root />,
    document.getElementById('root')
);
