
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Buynow from './Components/Buynow';
import Datalist from './Components/Datalist';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/buynow' element={<Buynow/>}/>
    <Route path='/passdata' element={<Datalist/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
