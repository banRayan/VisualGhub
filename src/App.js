import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './router/routes';


const App = () => {
    return(
        <Router>
            <Routes />
        </Router>
    )
}

export default App;