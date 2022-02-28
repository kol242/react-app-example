import { observer } from 'mobx-react'
import React from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../Common/Services/AuthService'
import WorkerStore from '../Stores/Workers/WorkerStore'
import WorkPlaceStore from '../Stores/Workplaces/WorkPlaceStore'
import '../Common/style/dashboard.scss'

const Dashboard = observer(() => {
  return (
    <div className="dashboard-wrapper">
        <h1>Hello <span className="userID">{AuthService.userData.username}</span></h1>
        <div className="user-info">
          <p><span id="bolded">Company name:</span> {AuthService.userData.company}</p>
          <p><span id="bolded">Country:</span> {AuthService.userData.country}</p>
          <p><span id="bolded">Company Activity:</span> {AuthService.userData.activity}</p>  
        </div>
        <div className="buttons">
          <Link to="/workers"><button className="btn-secondary" onClick={WorkPlaceStore.getWorkplaces}>Workers</button></Link>
          <Link to="/workplaces"><button className="btn-secondary" onClick={WorkerStore.getWorkers}>Workplaces</button></Link>  
        </div>
        
    </div>
  )
})

export default Dashboard