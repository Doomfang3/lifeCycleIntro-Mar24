import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CharactersPage = () => {
  const [characters, setCharacters] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const getCharacters = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character')
      console.log(response)
      if (response.ok) {
        const charactersData = await response.json()
        setCharacters(charactersData.results)
        console.log('From fetch', charactersData.results)
        console.log('State from fetch', characters)
      } else {
        setErrorMessage('There was an error fetching the data')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCharacters()
  }, [])

  useEffect(() => {
    console.log({ characters })
  }, [characters])

  return (
    <>
      <h1>All characters</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <ul>
        {characters.map(currentCharacter => (
          <li key={currentCharacter.id}>
            <Link to={`/characters/${currentCharacter.id}`}>{currentCharacter.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CharactersPage
