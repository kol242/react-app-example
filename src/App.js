import Workers from './Pages/Workers/Workers'
import Workplaces from './Pages/Workplaces/Workplaces'
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
      </Routes>
    </Router>
  )
}

export default App;
