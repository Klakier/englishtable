// <reference path="typings/main.d.ts" />
import * as React from 'react';
import * as inspections from './../../Utils/objectInspections.js';

var BtnWithOtions = React.createClass({
    _onOptionChanged()  {
        console.log('Option changed');
        if (props.onOptionChanged) {
            props.onOptionChanged();
        }
    },
    
    getDefaultOption() {
        if(this.props.selectedOption) {
            return this.props.selectedOption;
        }
        
        if( inspections.isEmpty(this.props.options)) {
            return '';
        }
        
        return props.options[0];
    },
    
    render() {
        var options = [];
        for(let option in this.props.options) {
            options.push(<li><a key={option.key} onClick={_onOptionChanged()}>{option.value}</a></li>);
        };
        
        return (
        <div className='btn-group'>
            <a type="button" className="btn btn-small dropdown-toggle" data-toggle="dropdown">
                <span>
                    {this.getDefaultOption()}
                </span>
                <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
                {options}
            </ul>
        </div>
        )
    }
});

export var columnConfiguration = React.createClass({
    render() {
        return ( 
            <div>
            <input type="text" name="first name" placeholder="Column name"/>
            <BtnWithOtions selectedOption={'foobar'} options={[1, 2, 4]}/>
            </div>
        );
    }
});