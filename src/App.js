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
            <Route path='/' exact element={<Dashboard />} />
            {!isLoggedIn && <Route path='/login' element={<Login />} />}
            {!isLoggedIn && <Route path='/signup' element={<Signup />} />}
            <Route path='*' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
