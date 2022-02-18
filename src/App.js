import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/Auth';

import Routes from './router/routes';


const App = () => {
    return(
        <AuthProvider>
            <Router>
                <Routes />
            </Router>
        </AuthProvider>
    )
}

export default App;