import React, {PropTypes, Component} from 'react';
import Button from './Button';

class TextInput extends Component {
    constructor(props) {
        super(props);
        const {initialText} = this.props;
        this.state = {text: initialText};
    }

    handleChange(e) {
        console.log('change');
        this.setState({text: e.target.value});
    }
    
    handleBtnClicked() {
        const {inputAccepted} = this.props;
        inputAccepted(this.state.text);
    }

    render() {
        return (
            <div>
                <div>
                    <textarea value={this.state.text} onChange={e => this.handleChange(e)}/>
                    <Button onClick={() => this.handleBtnClicked()} content="Accept"/>
                </div>
            </div>
        );
    }
}

TextInput.propTypes = {
    inputAccepted: PropTypes.func.isRequired,
    initialText: PropTypes.string.isRequired
};

export default TextInput;
