import Workers from './Pages/Workers/Workers'
import Workplaces from './Pages/Workplaces/Workplaces'
import Home from './Pages/Homepage/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './Common/style/app.scss'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { AuthProvider } from './Context/AuthContext'
import PrivateRoute from './Components/PrivateRoute'
import LogIn from './Components/LogIn/LogIn'
import Signup from './Components/SignUp/Signup'
import Dashboard from './Pages/Dashboard'

function App() {
  return (
    <div className="app-layout">
      <Router>
        <Navbar className="navbar"/>  
          <AuthProvider>
            <Routes>
              <Route exact path= "/" element={<Home className="body"/>}/>
              <Route path="/login" element={<LogIn className="body" />} />
              <Route path="/signup" element={<Signup className="body" />} />
              <Route exact path="/workers" element={<PrivateRoute/>}>
                <Route exact path= "/workers" element={<Workers className="body"/>}/>  
              </Route>
              <Route exact path="/workplaces" element={<PrivateRoute/>}>
                <Route exact path= "/workplaces" element={<Workplaces className="body"/>}/>  
              </Route>
              <Route exact path="/dashboard" element={<PrivateRoute/>}>
                <Route exact path= "/dashboard" element={<Dashboard className="body"/>}/>  
              </Route>
            </Routes>
          </AuthProvider>
        <Footer className="footer" />
      </Router>    
    </div>
  )
}

export default App;
