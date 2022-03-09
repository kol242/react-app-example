import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'
import '../../Common/style/signup.scss'
import SignupForm from './form.class'
import Input from './Inputs/Input'
import Country from './Inputs/Country'

const form = new SignupForm()

const Signup = observer(() => {
    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        await form.onSubmit(e)  
        history("/login")  
    }

    return (
        <div className="signup-wrapper">
            <div className="signup-content">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit} className="signup-form__wrapper">
                    <div className="signup-form__content">
                        <div>
                            <Input field={form.$('email')}/>
                            <Input field={form.$('username')}/>
                            <Input field={form.$('password')}/>
                            <Input field={form.$('confirmPass')}/>
                        </div>
                        <div>
                            <Input field={form.$('company')}/>
                            <Input field={form.$('activity')}/>
                            <Country field={form.$('country')}/>
                        </div>
                    </div>
                    <button className="btn-secondary" type="submit">
                        Sign Up
                    </button>
                </form>
                <div>
                    Already have an account? <Link to="/login">Log In</Link>
                </div>    
            </div>
        </div>
    )
})

export default Signup