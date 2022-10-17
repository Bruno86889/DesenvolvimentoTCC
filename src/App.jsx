import './scss/index.scss'
import { Intitucional } from './pages/Intitucional'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intitucional />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
