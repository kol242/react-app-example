import WorkersList from './Components/WorkersList'
import WorkPlaceList from './Components/WorkPlaceList'
import UpdateWorker from './Components/UpdateWorker'
import UpdateWorkplace from './Components/UpdateWorkplace'
import NewWorker from './Components/NewWorker'
import NewWorkplace from './Components/NewWorkplace'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<WorkersList/>}/>
        <Route path= "/workplaces" element={<WorkPlaceList/>}/>
        <Route path= "/edit-worker" element={<UpdateWorker/>}/>
        <Route path= "/edit-workplace" element={<UpdateWorkplace/>}/>
        <Route path= "/new-worker" element={<NewWorker/>}/>
        <Route path= "/new-workplace" element={<NewWorkplace/>}/>
      </Routes>
    </Router>
  )
}

export default App;
