import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>Hello</h1>
            <Link to="/workplaces"><button className="btn btn-secondary">Radna mjesta</button></Link>
            <Link to="/workers"><button className="btn btn-secondary">Lista radnika</button></Link>
        </div>
    )
}

export default Home
