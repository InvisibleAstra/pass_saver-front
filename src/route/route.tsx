import * as React from 'react';
import {createBrowserRouter, Routes, Route} from "react-router-dom";
import {PasswordArea} from "../components/Password_Area/PasswordArea.component";
import {NotFoundPage} from "../components/404/NotFoundPage.component";

export const routers = (
    <React.Fragment>
        <Routes>
            <Route path={'/'} element={<PasswordArea/>}></Route>
            <Route path={'*'} element = {<NotFoundPage/>}></Route>
        </Routes>
    </React.Fragment>
)
