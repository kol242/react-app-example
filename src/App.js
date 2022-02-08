import Workers from './Pages/Workers/Workers'
import Workplaces from './Pages/Workplaces/Workplaces'
import Home from './Pages/Homepage/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './Common/style/app.scss'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <>
      <Router>
      <Navbar /> 
        <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path= "/workers" element={<Workers/>}/>
          <Route path= "/workplaces" element={<Workplaces/>}/>
        </Routes>
      </Router>    
    </>
  )
}

export default App;
