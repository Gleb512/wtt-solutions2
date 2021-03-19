import {applyMiddleware, combineReducers, createStore} from "redux"
import loginReducer from "./login-reducer"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import contactReducer from "./contact-reducer"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import hardSet from "redux-persist/lib/stateReconciler/hardSet"
import crossBrowserListener from "../utils/storage-listener"


const persistConfig = {
    key: "root",
    storage,
    stateReconciler: hardSet
}


// Reducer Pack creating
let reducerPack = combineReducers({
    login: loginReducer,
    contact: contactReducer,
    form: formReducer
})
const persistedReducer = persistReducer(persistConfig, reducerPack)


const store = createStore(persistedReducer, {}, applyMiddleware(thunkMiddleware))
window.addEventListener("storage", crossBrowserListener(store, persistConfig));


// For Debug
window.store = store;

export default store