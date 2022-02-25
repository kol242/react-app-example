import React from 'react'
import { Link } from 'react-router-dom'
import '../../Common/style/navbar.scss'

const Navbar = () => {
  return (
    <div className="nav">
        <Link className="link" to="/">W&W Manager App</Link> 
        <ul className="nav__links">
            <li>
                <Link className="link" to="/workplaces">
                    Workplaces list
                </Link>    
            </li>
            <li>
                <Link className="link" to="/workers">
                    Workers list
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar;
