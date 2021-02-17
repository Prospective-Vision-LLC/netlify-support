import React from 'react';
import logo from './logo.svg';
import './App.css';

const {REACT_APP_DEV_VARIABLE, REACT_APP_PROD_VARIABLE} = process.env;

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    <ul>
                        <li>REACT_APP_DEV_VARIABLE: {REACT_APP_DEV_VARIABLE}</li>
                        <li>REACT_APP_PROD_VARIABLE: {REACT_APP_PROD_VARIABLE}</li>
                    </ul>
                </p>
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
