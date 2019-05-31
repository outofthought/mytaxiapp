import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import thunk from "redux-thunk";

import {createLogger} from 'redux-logger'

import placesReducer from './reducers/root'


const log=createLogger({diff:true,collapsed:true})


const rootReducer=combineReducers({
    places:placesReducer
})
let composeEnhancers=compose

if(__DEV__){
    composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose
}

const configureStore=()=>{
    return createStore(rootReducer,composeEnhancers(applyMiddleware(thunk,log)))
}

export default configureStore