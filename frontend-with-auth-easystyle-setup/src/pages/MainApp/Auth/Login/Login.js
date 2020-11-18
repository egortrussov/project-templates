import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import { AuthContext } from '../../../../Context/AuthContext';

import Heading from '../../../../components/ReusableComponents/Heading'
import Input from '../../../../components/ReusableComponents/InputField';
import Button from '../../../../components/ReusableComponents/Button';

export default class Login extends Component {

    state = {
        errors: [],
        email: '',
        password: '',
        isRedirect: false,
        isSubmitted: false
    }

    static contextType = AuthContext;

    componentDidMount() {
        if (this.context.token) 
            this.setState({
                isRedirect: true
            })
    }
    

    setCredential(e) {
        const name = e.target.name;
        const value = e.target.value;
        
        this.setState({
            [name]: value
        })
    }

    login(e) {
        e.preventDefault();

        this.setState({
            isSubmitted: true 
        })

        const {
            email,
            password
        } = this.state;

        const req = {
            email,
            password
        }

        fetch(`${ this.context.proxy }/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req)
        }) 
            .then(res => res.json())
            .then(res => {
                if (!res.success) {
                    let errors = [];
                    if (res.isEmailError) errors['email'] = 'Email not found';
                    if (res.isPasswordError) errors['password'] = 'Incorrect password';

                    this.setState({
                        errors,
                        isSubmitted: false
                    })

                    return;
                }

                this.context.login(res.token, res.expiration, res.user);

                window.location.href = '/app/'
            })
    }

    render() {
        const { errors, isRedirect, isSubmitted } = this.state;

        if (isRedirect) return (
            <Redirect
                to="/app/"
            />
        )

        return (
            <div>
                <Heading 
                    text="Login"
                    type="lg"
                />
                <form onSubmit={ e => this.login(e) }>
                    <Input
                        type="email"
                        name="email"
                        label="E-mail"
                        onChange={ (e) => this.setCredential(e) }
                        errorMsg={ errors['email'] }
                    />
                    <Input
                        type="password"
                        name="password"
                        label="Password"
                        onChange={ (e) => this.setCredential(e) }
                        errorMsg={ errors['password'] }
                    />
                    <div className="input-group">
                        <Button 
                            text="Login"
                            isLoading={ isSubmitted }
                            type="cta"
                        />
                    </div>
                </form>
            </div>
        )
    }
}
