import './App.css'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './Pages/Home/Home';
import DetailProduct from './Pages/DetailProduct/DetailProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/id" element={<DetailProduct/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
