import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Buy from './pages/Buy'
import Sell from './pages/Sell'

export default function App() {
  return(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/buy' element={<Buy/>}/>
      <Route path='/sell' element={<Sell/>}/>
    </Routes>
  </BrowserRouter>
  )  
}

