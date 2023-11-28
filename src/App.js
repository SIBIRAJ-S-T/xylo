import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login/>}></Route>
              <Route path='/Signup' element={<Signup/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
