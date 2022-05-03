import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {

  const AuthCtx = useContext(AuthContext);
  const isLoggedIn = AuthCtx.isLoggedIn;

  return (
    <div className="App">
      <Router>
        <Routes>
          {isLoggedIn ? 
            <Route path='/' exact element={<Dashboard />} />
            :
            <Route path='/' exact element={<Login />} />
          }
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
