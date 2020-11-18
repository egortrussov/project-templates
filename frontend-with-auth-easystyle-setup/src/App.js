import React, { Component } from 'react'
import  { BrowserRouter, Switch, Route } from 'react-router-dom'


import LandingPage from './pages/LandingPage/LandingPage'
import MainApp from './pages/MainApp/MainApp'

import './GlobalCSS/globalStyles.css'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <>
                    <Switch>
                        <Route exact path="/" component={ LandingPage } />
                        <Route path="/app" component={ MainApp } />
                    </Switch>
                </>
            </BrowserRouter>
        )
    }
}
