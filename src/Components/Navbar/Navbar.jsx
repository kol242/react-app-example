import { observer } from 'mobx-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../Common/style/navbar.scss'
import AuthService from '../../Common/Services/AuthService'

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
            <Link className="link" to="/">W&W Manager App</Link> 
            { AuthService.loggedIn === true ? 
            <div className="user-data">
              <p className="link">{AuthService.userData.company}</p>
              <p className="link" onClick={handleLogout}>Log Out</p>  
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
