import './scss/globals.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Feed from './pages/index';
import Tutorial from './pages/tutorial';
import Galeria from './pages/galeria';
import Sobre from './pages/sobre';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Feed/>} /> 
        <Route path='/sobre' element={<Sobre/>} />
        <Route path='/galeria' element={<Galeria/>} />       
        <Route path='/tutorial' element={<Tutorial/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App