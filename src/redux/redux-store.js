import { applyMiddleware, combineReducers, compose, createStore } from "redux"; 
import dialogsReducer from "./dialogs-reducer";  
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";

let reducers = combineReducers({ 
    dialogsPage: dialogsReducer,  
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;
 
export default store;