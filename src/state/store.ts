import {combineReducers} from "redux";
import {legacy_createStore as createStore} from 'redux'

const rootReducer = combineReducers({})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;