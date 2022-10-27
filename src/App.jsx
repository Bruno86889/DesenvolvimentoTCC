import './scss/globals.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import News from './pages/index';
import Tutorial from './pages/tutorial';
import Galeria from './pages/galeria';
import Sobre from './pages/sobre';
import Edital from './pages/edital';
import Cursos from './pages/cursos/index';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<News/>} /> 
        <Route path='/sobre' element={<Sobre/>} />
        <Route path='/galeria' element={<Galeria/>} />       
        <Route path='/tutorial' element={<Tutorial/>} />
        <Route path='/edital' element={<Edital/>}/>
        <Route path='/cursos' element={<Cursos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App