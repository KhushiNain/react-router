import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import NavBar from './component/NavBar'
import Contact from './pages/contact'
import About from './pages/About'

function App() {
  

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </>
  )
}

export default App