import Workers from './Pages/Workers/Workers'
import Workplaces from './Pages/Workplaces/Workplaces'
import UpdateWorker from './Pages/Workers/UpdateWorker'
import UpdateWorkplace from './Pages/Workplaces/UpdateWorkplace'
import NewWorker from './Pages/Workers/NewWorker'
import NewWorkplace from './Pages/Workplaces/NewWorkplace'
import Home from './Pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './Common/style/app.scss'

function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path= "/workers" element={<Workers/>}/>
        <Route path= "/workplaces" element={<Workplaces/>}/>
        <Route path= "/edit-worker" element={<UpdateWorker/>}/>
        <Route path= "/edit-workplace" element={<UpdateWorkplace/>}/>
        <Route path= "/new-worker" element={<NewWorker/>}/>
        <Route path= "/new-workplace" element={<NewWorkplace/>}/>
      </Routes>
    </Router>
  )
}

export default App;
