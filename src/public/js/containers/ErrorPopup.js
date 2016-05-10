import {connect} from 'react-redux';

import Notification from '../components/Popup'


const mapStateToProps = (state) => {
    var errors = state.dictionary.textInput.errors;
    return {
        errors: errors
    };
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

const ErrorPopup = connect(
    mapStateToProps,
    mapDispatchToProps
)(Notification);

export default ErrorPopup;
