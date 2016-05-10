import React, {PropTypes, Component} from 'react';
import Button from './Button';

class TextInput extends Component {
    handleChange(e) {
        const {onTextChanged} = this.props;
        onTextChanged(e.target.value);
    }
    
    handleAcceptBtnClicked() {
        const {inputAccepted} = this.props;
        inputAccepted();
    }
    
    handleDiscardBtnClicked() {
        const {inputDiscarded} = this.props;
        inputDiscarded();
    }

    render() {
        const {text} = this.props;
        return (
            <div>
                <div>
                    <textarea value={text} onChange={e => this.handleChange(e)}/>
                    <Button onClick={() => this.handleAcceptBtnClicked()} content="Accept"/>
                    <Button onClick={() => this.handleDiscardBtnClicked()} content="Discard"/>
                </div>
            </div>
        );
    }
}

TextInput.propTypes = {
    inputAccepted: PropTypes.func.isRequired,
    inputDiscarded: PropTypes.func.isRequired,
    onTextChanged: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default TextInput;
