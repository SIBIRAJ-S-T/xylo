import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

function App() {
  return (
    <div>
      {/*<BrowserRouter>
  <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/Login" element={<Login/>}></Route>
              <Route path="/Signup" element={<Signup/>}></Route>
          </Routes>
      </BrowserRouter>*/}
      <Home/>
  </div>
  );
}

export default App;
