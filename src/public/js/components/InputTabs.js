/// <reference path="./../../../../typings/main.d.ts" />

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import React, {PropTypes, Component} from 'react';
import TextInput from './TextInput';
import TableInput from './TableInput';
import tabTypes from './../tabTypes';

export class InputTabs extends Component {

    handleSelect(selectedTab, previousTab) {
        const {onTabChanged} = this.props;

        onTabChanged(selectedTab, previousTab);
        this.setState({selectedTab: selectedTab});
    }

    render() {
        const {
            onTableInputChanged,
            onRemoveRowBtnClicked,
            onNewRowBtnClicked,
            items,
            onTextInputAccepted,
            onTextInputDiscarded,
            onTextInputChanged,
            text,
            selectedTab
        } = this.props;

        return (
            <Tabs onSelect={(selected, prev) => this.handleSelect(selected, prev)}
                  selectedIndex={selectedTab}>
                <TabList>
                    <Tab>{tabTypes.text}</Tab>
                    <Tab>{tabTypes.table}</Tab>
                </TabList>
                <TabPanel>
                    <TextInput
                        inputAccepted={onTextInputAccepted}
                        inputDiscarded={onTextInputDiscarded}
                        onTextChanged={onTextInputChanged}
                        text={text}/>
                </TabPanel>
                <TabPanel>
                    <TableInput
                        onInputChanged={onTableInputChanged}
                        items={items}
                        onRemoveRowClicked={onRemoveRowBtnClicked}
                        onNewRowBtnClicked={onNewRowBtnClicked}
                    />
                </TabPanel>
            </Tabs>
        );
    };
}

InputTabs.propTypes = {
    onTabChanged: PropTypes.func.isRequired,

    onTextInputAccepted: PropTypes.func.isRequired,
    onTextInputChanged: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,

    onTableInputChanged: PropTypes.func.isRequired,
    onRemoveRowBtnClicked: PropTypes.func.isRequired,
    onNewRowBtnClicked: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
};

export default InputTabs;

