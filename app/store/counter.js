import { createStore } from 'redux';
import { counter } from '../reducers/counter';
import { increaseAction } from '../action/counter';

// Store:
export let store = createStore(counter);

// Map Redux state to component props
export function mapStateToProps(state)  {
  return {
    value: state.count
  };
}

// Map Redux actions to component props
export function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  };
}

