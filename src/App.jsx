import Home from './components/Home'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Realestate from './components/Realestate'
import Consultancy from './components/Consultancy'
import Contact from './components/Contact'
import Construction from './components/construction'

function App() {


  return (
    <div>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/estate' element={<Realestate/>}/>
     <Route path='/construction' element={<Construction/>}/>
     <Route path='/consultancy' element={<Consultancy/>}/>
     <Route path='/contact' element={<Contact/>}/>
     
     
    </Routes>
    </BrowserRouter>
   </div>
  
  )
}

export default App
