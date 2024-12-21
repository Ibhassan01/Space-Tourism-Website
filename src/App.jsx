import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
// import Header from './components/Header';

function App() {
  return (
    <Router>
      {/* <Header/> */}
      <div className='main'>
        <Routes>
          <Route 
            exact
            path='/' 
            element={<Home/>} 
          />
          <Route 
            exact
            path='/destination' 
            element={<Destination/>} 
          />
          <Route 
            exact
            path='/crew' 
            element={<Crew/>} 
          />
          <Route 
            exact
            path='/technology' 
            element={<Technology/>} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
