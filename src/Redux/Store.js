import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import environments from '../environments';


const logger = createLogger();

 /* eslint-disable */
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
const initialState={
    state:[],
        colors:[]
}

    const newState = (state=initialState, action)=>{
        if(action.type == 'TEST')

        return {...state,
            colors:action.color
        };
        return{}
    }

const reducers = combineReducers({
    [newState]:newState
});

const middlewares = [thunk];
if (environments?.logger) {
  middlewares.push(logger);
}
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);



window.Store = store;

export default store;

