import { createStore } from 'redux'
import rootReducer from './reducers'

// let store = createStore(rootReducer)

const configureStore = (initialState = {}) => {
    return createStore(
      rootReducer,
      initialState,
    );
  };
  

export default configureStore;