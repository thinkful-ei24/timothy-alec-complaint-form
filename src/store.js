import { createStore, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

function reducer(state = {}, action){
  return {
    form: formReducer(state, action)
  };
}

export default createStore(reducer, applyMiddleware(thunk));