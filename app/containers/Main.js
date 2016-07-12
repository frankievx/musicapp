import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main/Main';
import * as SearchActions from '../actions/search_actions';
import * as QueueActions from '../actions/queue_actions';

function mapStateToProps(state) {
  return {
    results: state.results,
    queue: state.queue
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, SearchActions, QueueActions), dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);