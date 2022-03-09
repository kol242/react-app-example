import React from 'react'
import { observer } from 'mobx-react'
import { Link, useNavigate } from 'react-router-dom'
import '../Common/style/signup.scss'
import AuthService from '../Common/Services/AuthService'
import Input from '../Components/UserProperties/Inputs/Input'
import UpdateForm from '../Components/UserProperties/form.class'
import Country from '../Components/UserProperties/Inputs/Country'

const form = new UpdateForm()

const UserProperties = observer(() => {
    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        await form.onSubmit(e)  
        history("/dashboard")  
    }

    return (
        <div className="signup-wrapper">
            <div className="signup-content">
                <h2>Update profile</h2>
                <form onSubmit={handleSubmit} className="signup-form__wrapper">
                    <div className="signup-form__content">
                        <div>
                            <Input field={form.$('email')} data={AuthService.currentUser.email}/>
                            <Input field={form.$('username')} data={AuthService.userData.username}/>
                            <Input field={form.$('password')}/>
                            <Input field={form.$('confirmPass')}/>
                        </div>
                        <div>
                            <Input field={form.$('company')} data={AuthService.userData.company}/>
                            <Input field={form.$('activity')} data={AuthService.userData.activity}/>
                            <Country field={form.$('country')} data={AuthService.userData.country}/>  
                        </div>    
                    </div>
                    <div className="links">
                        <button disabled={AuthService.loading} className="btn-secondary" type="submit">
                            Save
                        </button>
                        <Link to="/dashboard"><button className="btn-link">Back</button></Link>    
                    </div>
                </form>  
            </div>
        </div>
    )
})

export default UserProperties