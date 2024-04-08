import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const CharacterDetailsPage = () => {
  const { charId } = useParams()

  const [character, setCharacter] = useState({})

  const getCharacter = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${charId}`)
      if (response.ok) {
        const characterData = await response.json()
        setCharacter(characterData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCharacter()
  }, [charId])

  useEffect(() => {
    const fetchIntervalId = setInterval(() => {
      getCharacter()
    }, 5000)

    return () => {
      clearInterval(fetchIntervalId)
    }
  }, [])

  return (
    <>
      <h1>Details of {character.name}</h1>
      <Link to={`/characters/1`}>Rick</Link>
      <button type='button' onClick={getCharacter}>
        Refresh
      </button>
    </>
  )
}

export default CharacterDetailsPage
