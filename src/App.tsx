import React from 'react';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Dashboard/>
            </BrowserRouter>
        </div>
    );
}

export default App;
