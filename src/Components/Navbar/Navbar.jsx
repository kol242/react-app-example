import { observer } from 'mobx-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../Common/style/navbar.scss'
import AuthService from '../../Common/Services/AuthService'
import { FaUserCog } from 'react-icons/fa'

const Navbar = observer(() => {
    const history = useNavigate()
  
    async function handleLogout() {
      try {
        await AuthService.logout()
        history("/login")
      } catch(err) {
        console.error(err)
      }
    }
  
    return (
        <div className="nav">
            { AuthService.loggedIn === true ? 
              <Link className="link" to="/dashboard">W&W Manager App</Link> 
            : 
              <Link className="link" to="/">W&W Manager App</Link> 
            }
            { AuthService.loggedIn === true ? 
            <div className="user-data">
              <p className="link" onClick={handleLogout}>Log Out</p>
              <div className="link-wrapper">
                <Link to="/properties" className="link">Profile</Link>
                <FaUserCog className="icon"/>
              </div>
            </div>
            : 
            <div className="user-data">
                <Link className="link" to="/login">Log In</Link>
                <Link className="link" to="/signup">Sign Up</Link>
            </div>
            }
        </div>
    )
})

export default Navbar;
