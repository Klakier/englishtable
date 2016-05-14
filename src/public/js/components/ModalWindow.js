import React, {PropTypes, Component} from 'react';

class ModalWindow extends Component {
    render() {
        const {children} = this.props;

        return (
            <div className="modal-window">
                <div className="modal-content">
                    <span className="close">x</span>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        )
    }

}
