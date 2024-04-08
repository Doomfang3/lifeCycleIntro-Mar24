import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import CharactersPage from './pages/CharactersPage'
import CharacterDetailsPage from './pages/CharacterDetailsPage'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/characters'>All Characters</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<CharactersPage />} />
        <Route path='/characters/:charId' element={<CharacterDetailsPage />} />

        <Route path='*' element={<h1>404 Page</h1>} />
      </Routes>
    </>
  )
}

export default App
