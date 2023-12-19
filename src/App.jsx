import './App.css'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './Pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
