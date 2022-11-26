import React from 'react';
import Router from './routes';
import './index.css';
import useAuthCheck from './hooks/useAuthCheck';

function App() {
    const authChecked = useAuthCheck();
    return !authChecked ? (
        <div>Checking authentication....</div>
    ) : (
        <div className='App'>
            <Router />
        </div>
    );
}

export default App;
