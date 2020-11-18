import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import AuthContextProvider from '../../Context/AuthContext'

import Navbar from '../../components/Navbar/Navbar'
import Login from './Auth/Login/Login'
import Register from './Auth/Register/Register'

import './css/MainApp.css'

export default class MainApp extends Component {

    render() {
        return (
            <AuthContextProvider>
                <div className="app-container">
                    <Navbar />
                    <main>
                        <Switch>
                            <Route path="/app/register" component={ Register } />
                            <Route path="/app/login" component={ Login } />
                        </Switch>
                    </main>
                </div>
            </AuthContextProvider>
        )
    }
}
