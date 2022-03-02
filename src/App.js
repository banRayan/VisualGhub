import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/Auth';

import Routes from './router/routes';
import GlobalStyle from './styles/themes/GlobalStyle';


const App = () => {
    return(
            <AuthProvider>
                <Router>
                    <Routes />
                    <GlobalStyle />
                </Router>
            </AuthProvider>
    )
}

export default App;