import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainPage from './MainPage'
import Clock from './Clock'
import Header from './Header'

export default function App() {
    return (
    <div className='container'>
        <Router>
            <div >
                <Header/>
                <Route exact path="/">
                    <MainPage />
                </Route>
                <Route  path="/Clock">
                    <Clock />
                </Route>
            </div>
        </Router>
    </div>
    )
}
