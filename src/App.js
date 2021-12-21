import List from './Components/List'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path= "/" element={<List/>}/>
      </Routes>
    </Router>
  )
}

export default App;
