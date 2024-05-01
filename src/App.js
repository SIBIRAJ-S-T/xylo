import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Inhome1 from './Inhome/Inhome1';
import Inhome2 from './Inhome/Inhome2';
import Inhome3 from './Inhome/Inhome3';
import Inhome4 from './Inhome/Inhome4';
import Inhome5 from './Inhome/Inhome5';
import Inhome6 from './Inhome/Inhome6';
import Inhome7 from './Inhome/Inhome7';
import Inhome8 from './Inhome/Inhome8';
import Payment from './Payment';
import DeleteAcc from './DeleteAcc';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/Login" element={<Login/>}></Route>
              <Route path="/Signup" element={<Signup/>}></Route>
              <Route path="/Inhome/Inhome1" element={<Inhome1/>}></Route>
              <Route path="/Inhome/Inhome2" element={<Inhome2/>}></Route>
              <Route path="/Inhome/Inhome3" element={<Inhome3/>}></Route>
              <Route path="/Inhome/Inhome4" element={<Inhome4/>}></Route>
              <Route path="/Inhome/Inhome5" element={<Inhome5/>}></Route>
              <Route path="/Inhome/Inhome6" element={<Inhome6/>}></Route>
              <Route path="/Inhome/Inhome7" element={<Inhome7/>}></Route>
              <Route path="/Inhome/Inhome8" element={<Inhome8/>}></Route>
              <Route path="/Payment" element={<Payment/>}></Route>
              <Route path="/DeleteAcc" element={<DeleteAcc/>}></Route>
          </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
