import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

function App() {
  return (
        <div className="App">
          <Router>
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path='/details' element={<Details />} />
            </Routes>  
          </Router>
        </div>
  );
}

export default App;