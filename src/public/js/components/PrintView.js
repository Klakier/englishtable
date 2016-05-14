import React, {PropTypes, Component} from 'react';
import Button from './Button';

class PrintView extends Component {
    render() {
        const {printAction} = this.props;
        return (
            <Button content="Print" onclick={() => printAction()}/>
        )
    }
}

PrintView.propTypes = {
    printAction: PropTypes.func.isRequired
};

export default PrintView;
