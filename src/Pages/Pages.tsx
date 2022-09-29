import {Route, Routes} from "react-router-dom";
import {Login} from "./Login/Login";
import {PassRecovery} from "./PassRecovery/PassRecovery";
import {Profile} from "./Profile/Profile";
import {NewPass} from "./NewPass/NewPass";
import {SuperComponents} from "./SuperComponents/SuperComponents";
import {Error404} from "./Error404/Error404";
import React from "react";

const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    PASSRECOVERY: '/passrecovery',
    NEWPASS: '/newpass',
    TESTSUPERCOMPONENTS: '/supercomponents'
}

export function Pages() {
    return (
        <div className="App">
            <Routes>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<PassRecovery/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.PASSRECOVERY} element={<PassRecovery/>}/>
                <Route path={PATH.NEWPASS} element={<NewPass/>}/>
                <Route path={PATH.TESTSUPERCOMPONENTS} element={<SuperComponents/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>

        </div>
    );
}
