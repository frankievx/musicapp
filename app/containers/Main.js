import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main/Main';
import * as SearchActions from '../actions/search_actions';

function mapStateToProps(state) {
  return {
    results: state.results
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SearchActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);