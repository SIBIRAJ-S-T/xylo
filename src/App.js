import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Inhome from './Inhome/Inhome1';
import Inhome1 from './Inhome/Inhome1';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/Login" element={<Login/>}></Route>
              <Route path="/Signup" element={<Signup/>}></Route>
              <Route path="/Inhome/Inhome1" element={<Inhome1/>}></Route>
          </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
