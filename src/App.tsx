import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing'
import CounterHome from './components/CounterHome'
import Updates from './updates/Updates'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Landing/>}/>
    <Route  path='/components' element={<CounterHome/>}/>
    <Route path='/updates' element={<Updates/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
