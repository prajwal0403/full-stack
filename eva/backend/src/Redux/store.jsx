import {createStore , combineReducers , applyMiddleware , compose} from "redux"
import { login_reducer } from "./Login/reducer"
import { sign_reducer } from "./Signup/reducer"

import thunk  from 'redux-thunk'
export const root_reducer = combineReducers({
   login:login_reducer,
   sign : sign_reducer,

})
const composeEnhancers =
  typeof window === 'object' &&
  window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ?   
    window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

     const middleware = [thunk]
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
;

export const store = createStore(root_reducer ,  enhancer)