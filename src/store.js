import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

function reducer(state = {}, action){
  return {
    form: formReducer(state, action)
  };
}

export default createStore(combineReducers({form: formReducer}), applyMiddleware(thunk));