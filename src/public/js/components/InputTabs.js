/// <reference path="./../../../../typings/main.d.ts" />

import {Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import React, { PropTypes, Component } from 'react';
import TextInput from './TextInput';
import TableInput from './TableInput';

export class InputTabs extends Component {
    handleSelect(currentTab, previousTab){
        console.log('current tab ' + currentTab + ', prevous tab' + previousTab);
    }
    render() {
        return (
            <Tabs onSelect={this.handleSelect}>
            <TabList>
                <Tab>text</Tab>
                <Tab>table</Tab>
            </TabList>
            <TabPanel>
                <TextInput onInputChanged={this.onTexInputChanged} />
            </TabPanel>
            <TabPanel>
                <TableInput onInputChanged={this.onTableInputChanged} />
            </TabPanel>
            </Tabs>
        );
    };
};

InputTabs.propTypes = {
    onTabChanged: PropTypes.func.isRequired,
    onTextInputChanged: PropTypes.func.isRequired,
    onTableInputChanged: PropTypes.func.isRequired,
};

export default InputTabs;

