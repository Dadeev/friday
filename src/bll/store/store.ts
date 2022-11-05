import {combineReducers} from "redux";
import {legacy_createStore as createStore} from 'redux'
import {authReducer} from "../reducers/auth-reducer";
import {profileReducer} from "../reducers/profile-reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    profile:profileReducer
})
export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;