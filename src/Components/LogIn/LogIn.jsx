import { observer } from 'mobx-react'
import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import '../../Common/style/auth.scss'
import LoginForm from './form.class'
import Input from './Inputs/Input'

const form = new LoginForm()

const LogIn = observer(() => {
    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await form.onSubmit(e)
            history("/dashboard") 
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="content-wrapper">
            <div className="content">
                <h2>Log In</h2>
                <form onSubmit={handleSubmit} className="form-content">
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