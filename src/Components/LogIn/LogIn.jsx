import { observer } from 'mobx-react'
import React from 'react'
import { Link, Navigate } from "react-router-dom"
import AuthService from '../../Common/Services/AuthService'
import '../../Common/style/auth.scss'
import LoginForm from './form.class'
import Input from './Inputs/Input'

const form = new LoginForm()

const LogIn = observer(() => {
    return AuthService.loggedIn === true ? <Navigate to="/dashboard" /> : (
        <div className="content-wrapper">
            <div className="content">
                <h2>Log In</h2>
                <form onSubmit={form.onSubmit} className="form-content">
                    <Input field={form.$('email')}/>
                    <Input field={form.$('password')}/>
                    <button className="btn-secondary" type="submit">
                        Log In
                    </button>
                </form>
                <div>
                    Need an account? <Link to="/signup">Sign Up</Link>
                </div>    
            </div>
        </div>
    )
})

export default LogIn