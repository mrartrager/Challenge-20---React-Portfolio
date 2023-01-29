import React from 'react';
import './index.css';
import App from './App';
import ReactDom from 'react-dom/client'

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

//export 