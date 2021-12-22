import List from './Components/List'
import UpdateDataForm from './Components/UpdateDataForm'
import NewDataForm from './Components/NewDataForm'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<List/>}/>
        <Route path= "/edit-worker" element={<UpdateDataForm/>}/>
        <Route path= "/new-worker" element={<NewDataForm/>}/>
      </Routes>
    </Router>
  )
}

export default App;
