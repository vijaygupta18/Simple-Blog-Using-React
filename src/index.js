import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Route} from 'react-router-dom';
import { Web } from './Services';



ReactDOM.render(<>
<BrowserRouter>
    <App/>
</BrowserRouter>

    </>,document.getElementById('root'));
















