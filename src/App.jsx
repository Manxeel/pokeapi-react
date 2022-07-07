import { useEffect, useState } from "react"
import Content from "./components/Content"
import Navbar from "./components/Navbar"
import {getPokemonByName, getPokemonData, getPokemons, getPokemonsByType} from './api'
function App() {
  const [pokemones, setPokemones] = useState([])
  const [page, setPage] = useState(0)
  const [searching, setSearching] = useState(false)
  const [total, setTotal] = useState(0)
  const [notFound, setNotFound] = useState(false)

  const fetchPokemons = async () => {
      try {
        const data = await getPokemons(27, 27 * page)
        const promesas = data.results.map(async (pokemon) => {
          return getPokemonData(pokemon.url)
        })
        const results = await Promise.all(promesas)
        setPokemones(results)
        setTotal(Math.ceil(data.count / 27))
        console.log(total)
      } catch (err) { }
  }
  
  useEffect(() => {
    if (!searching) {
      fetchPokemons()
    }
  }, [page])

  const searchByType = async(type) => {
    if (!type) {
      return fetchPokemons()
    }
    setSearching(true)
    const data = await getPokemonsByType(type)
    const arrayPoke = data.pokemon

    const promesas = arrayPoke.map(async (pokemon) => {
      console.log(pokemon)
      return getPokemonData(pokemon.pokemon.url)

    })
    const results = await Promise.all(promesas)
    setPokemones(results)
    
  }
  const searchPokemon = async (name) => {
    if (!name) {
      return fetchPokemons()
    }
    setSearching(true)
    console.log(name)
    const data = await getPokemonByName(name)
    if (!data) {
      setSearching(false)
      setNotFound(true)
      return fetchPokemons()
    }
    setPokemones([data])
    setTotal(1)
    setNotFound(false)
  }

  return (
    <div>
      <Navbar
        setSearching={setSearching}
      />
      <Content
        pokemones={pokemones}
        searchByType={searchByType}
        page={page}
        setPage={setPage}
        total={total}
        searchPokemon={searchPokemon}
        notFound={notFound}
      />
    </div>
  )
}

export default App
