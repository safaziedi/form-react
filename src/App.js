import { Route, Routes } from 'react-router';
import './App.css';
import HelloUser from './Components/HelloUser';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import NoMatched404 from './Components/NoMatched404';
import Register from './Components/Register';
import Users from './Components/Users';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='users' element={<Users />} />
        <Route path='users/:username' element={<HelloUser />} />
        <Route path='hello' element={<HelloUser />} />
        <Route path='*' element={<NoMatched404 />} />
      </Routes>
    </div>
      
  );
}

export default App;
