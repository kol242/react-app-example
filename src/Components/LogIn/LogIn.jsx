import { observer } from 'mobx-react'
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import '../../Common/style/auth.scss'
import AuthService from '../../Common/Services/AuthService'

const LogIn = observer(() => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState("")
    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            AuthService.loading = true
            await AuthService.login(emailRef.current.value, passwordRef.current.value)
            history("/dashboard")
        } catch (err) {
            console.error(err)
            setError("Failed to log in")
        }
        AuthService.loading = false
        
    }
    
    return (
        <div className="content-wrapper">
            <div className="content">
                <h2>Log In</h2>
                { error && <p className="error">{error}</p> }
                <form onSubmit={handleSubmit} className="form-content">
                    <div className="form-input">
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' id='email' ref={emailRef} required/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' ref={passwordRef} required/>
                    </div>
                    <button disabled={AuthService.loading} className="btn-secondary" type="submit">
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