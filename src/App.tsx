import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Login} from "./Pages/Login/Login";
import {Profile} from "./Pages/Profile/Profile";
import {Error404} from "./Pages/Error404/Error404";
import {NewPass} from "./Pages/NewPass/NewPass";
import {PassRecovery} from "./Pages/PassRecovery/PassRecovery";
import {SuperComponents} from "./Pages/SuperComponents/SuperComponents";

const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    PASSRECOVERY: '/passrecovery',
    NEWPASS: '/newpass',
    TESTSUPERCOMPONENTS: '/supercomponents'
}

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<PassRecovery/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.PASSRECOVERY} element={<PassRecovery/>}/>
                <Route path={PATH.NEWPASS} element={<NewPass/>}/>
                <Route path={PATH.TESTSUPERCOMPONENTS} element={<SuperComponents/>}/>
                <Route path={'*'} element={<Error404/>}/>
            </Routes>

        </div>
    );
}

export default App;
