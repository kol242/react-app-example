import Workers from './Pages/Workers/Workers'
import Workplaces from './Pages/Workplaces/Workplaces'
import Home from './Pages/Homepage/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './Common/style/app.scss'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="app-layout">
      <Router>
      <Navbar className="navbar"/> 
        <Routes>
          <Route path= "/" element={<Home className="body"/>}/>
          <Route path= "/workers" element={<Workers className="body"/>}/>
          <Route path= "/workplaces" element={<Workplaces className="body"/>}/>
        </Routes>
      <Footer className="footer" />
      </Router>    
    </div>
  )
}

export default App;
