import React, {PropTypes, Component} from 'react';
import Button from './Button';

class TextInput extends Component {
    handleChange(e) {
        const {onTextChanged} = this.props;
        onTextChanged(e.target.value);
    }
    
    handleBtnClicked() {
        const {inputAccepted} = this.props;
        inputAccepted();
    }

    render() {
        const {text} = this.props;
        return (
            <div>
                <div>
                    <textarea value={text} onChange={e => this.handleChange(e)}/>
                    <Button onClick={() => this.handleBtnClicked()} content="Accept"/>
                </div>
            </div>
        );
    }
}

TextInput.propTypes = {
    inputAccepted: PropTypes.func.isRequired,
    onTextChanged: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default TextInput;
