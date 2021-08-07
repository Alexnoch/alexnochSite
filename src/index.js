import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import  store  from './Redux/Store';
import { BrowserRouter } from 'react-router-dom';
import './index.css';




const root = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    </React.StrictMode>,
    root
)