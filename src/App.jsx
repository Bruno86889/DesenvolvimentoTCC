import './scss/globals.scss'
import Sobre from './pages/sobre'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tutorial from './pages/tutorial'
import Feed from './pages/index';
import Galeria from './pages/galeria';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/tutorial' element={<Tutorial />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/galeria' element={<Galeria />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
