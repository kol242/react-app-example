import SignupStore from '../../Stores/SignupStore'
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'
import '../../Common/style/signup.scss'
import AuthService from '../../Common/Services/AuthService'

const Signup = observer(() => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const nameRef = useRef()
    const activRef = useRef()
    const countryRef = useRef()
    const usernameRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState("")
    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
        try {
            setError("")
            AuthService.loading = true
            const userData = {
                company: nameRef.current.value,
                activity: activRef.current.value,
                country: e.target.country.value,
                username: usernameRef.current.value 
            }
            await AuthService.signup(emailRef.current.value, passwordRef.current.value, userData)
            history("/login")
        } catch(err) {
            console.error(err)
            setError("Failed to create an account")
        }
        AuthService.loading = false
    }

    return (
        <div className="signup-wrapper">
            <div className="signup-content">
                <h2>Sign Up</h2>
                { error && <p className="error">{error}</p> }
                <form onSubmit={handleSubmit} className="signup-form__wrapper">
                    <div className="signup-form__content">
                        <div>
                            <div className="signup-form__input">
                                <label htmlFor="email">Email</label>
                                <input type="text" name='email' id='email' ref={emailRef} required/>
                            </div> 
                            <div className="signup-form__input">
                                <label htmlFor="username">Username</label>
                                <input type="text" name='username' id='username' ref={usernameRef} required/>
                            </div>
                            <div className="signup-form__input">
                                <label htmlFor="password">Password</label>
                                <input type="password" name='password' id='password' ref={passwordRef} required/>
                            </div>
                            <div className="signup-form__input">
                                <label htmlFor="pass-confirm">Confirm password</label>
                                <input type="password" name='pass-confirm' ref={passwordConfirmRef} required/>
                            </div>   
                        </div>
                        <div>
                            <div className="signup-form__input">
                                <label htmlFor="name">Company Name</label>
                                <input type="text" name='name' id='name' ref={nameRef} required/>
                            </div>
                            
                            <div className="signup-form__input">
                                <label htmlFor="activity">Company Activity</label>
                                <input type="text" name='activity' id='activity' ref={activRef} required/>
                            </div>
                            <div className="signup-form__input">
                                <label htmlFor="activity">Country</label>
                                <input type="text" id="country" placeholder="Start typing..." required list="country-list"/>
                                <datalist id="country-list" name="country" ref={countryRef}>
                                    { SignupStore.countries.map(item => (
                                        <option value={item.name} key={item.name}>{item.name}</option>
                                    )) }
                                </datalist>
                            </div>    
                        </div>    
                    </div>
                    <button disabled={AuthService.loading} className="btn-secondary" type="submit">
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