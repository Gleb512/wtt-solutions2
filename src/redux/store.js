import {applyMiddleware, combineReducers, createStore} from "redux"
import loginReducer from "./login-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import contactReducer from "./contact-reducer";


// Reducer Pack creating
let reducerPack = combineReducers({
    login: loginReducer,
    contact: contactReducer,
    form: formReducer
})

// Connecting state to localstorage functionality
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        } else {
            return JSON.parse(serializedState);
        }
    } catch (err) {
        return undefined;
    }
}


let store = createStore(
    reducerPack,
    loadState(),
    applyMiddleware(thunkMiddleware)
);



// Connecting state to localstorage - continue...
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {

    }
};

store.subscribe(() => {
    const state = store.getState();
    saveState(state);
})


// For Debug
// window.store = store;

export default store;