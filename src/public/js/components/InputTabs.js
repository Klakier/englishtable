/// <reference path="./../../../../typings/main.d.ts" />

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import React, {PropTypes, Component} from 'react';
import TextInput from './TextInput';
import TableInput from './TableInput';

export class InputTabs extends Component {
    handleSelect(currentTab, previousTab) {
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
                    <TableInput
                        onInputChanged={this.props.onTableInputChanged}
                        items={this.props.items}
                        onRemoveRowClicked={this.props.onRemoveRowBtnClicked}
                        onNewRowBtnClicked={this.props.onNewRowBtnClicked}
                    />
                </TabPanel>
                <TabPanel>
                    <TextInput onInputChanged={this.props.onTextInputChanged}/>
                </TabPanel>
            </Tabs>
        );
    };
}
;

InputTabs.propTypes = {
    onTabChanged: PropTypes.func.isRequired,
    onTextInputChanged: PropTypes.func.isRequired,

    onTableInputChanged: PropTypes.func.isRequired,
    onRemoveRowBtnClicked: PropTypes.func.isRequired,
    onNewRowBtnClicked: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
};

export default InputTabs;

