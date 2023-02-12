import react from 'react'
import {createBrowserRouter} from "react-router-dom";
import {PasswordArea} from "../components/Password_Area/PasswordArea.component";
import {NotFoundPage} from "../components/404/NotFoundPage.component";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PasswordArea/>
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
])