import { connect } from 'react-redux';
import Btn from '../components/AcceptButton';
import { inputAccepted } from './../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    content: 'Accept Input'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(inputAccepted());
    }
  };
};

const AcceptInputBtn = connect(
  mapStateToProps,
  mapDispatchToProps
)(Btn);

export default AcceptInputBtn;