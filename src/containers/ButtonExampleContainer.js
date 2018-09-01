import { connect } from 'react-redux';
import actions from '../actions';
import ButtonExample from '../components/ButtonExample';

const mapStateToProps = state => ({
  placeholder: state.placeholder,
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(actions.exampleAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonExample);
