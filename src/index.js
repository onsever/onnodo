import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {TaskProvider} from "./context/TaskContext";

const root = ReactDOM.createRoot(document.getElementById('onno-app'));
root.render(
    <TaskProvider>
        <App />
    </TaskProvider>
);