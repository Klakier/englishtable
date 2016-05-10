import React, {PropTypes, Component} from 'react';

class Popup extends Component {
    render() {
        const {errors} = this.props;
        const hasError = errors.length > 0;
        console.log(`Errors array length ${errors.length}`);
        var errorElements = errors.map((elem, index) => {
            return (<p key={index}>Error={elem}</p>);
        });

        if(!hasError) {
            return null;
        }

        return (
            <div className="popup-container container">
                <div className="error-popup col-md-4 col-md-offset-4">
                    {errorElements}
                </div>
            </div>
        );
    }
}

Popup.propTypes = {
    errors: PropTypes.array.isRequired
};

export default Popup;
