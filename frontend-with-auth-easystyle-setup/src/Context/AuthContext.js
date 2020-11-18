import React, { Component, createContext } from 'react';
import Cookies from 'js-cookie';

import { getProxy } from '../dataFetching/getProxy';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        token: Cookies.get('token'),
        user: null,
        proxy: getProxy()
    }

    login(token, expiration, user) {
        Cookies.set('token', token, {
            expires: expiration
        })

        this.setState({
            token: token,
            user: user
        })
    }

    logout() {
        Cookies.remove('token');

        this.setState({
            token: null
        })
    }

    render() {

        return (
            <AuthContext.Provider
                value={{
                    ...this.state,
                    login: (token, expiration, user) =>  this.login(token, expiration, user),
                    logout: () => this.logout()
                }}
            >
                { this.props.children }
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider