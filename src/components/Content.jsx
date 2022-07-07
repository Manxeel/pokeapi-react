
import Pokemon from './Pokemon'
import './Content.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { useState } from 'react'

const TiposPokemon = [
    {
        id: 'normal',
        name: 'Normal',
    },
    {
        id: 'water',
        name: 'Agua',
    },
    {
        id: 'fire',
        name: 'Fuego',
    },
    {
        id: 'bug',
        name: 'Bicho',
    },
]
const Content = ({pokemones, searchByType, page, setPage, total, searchPokemon, notFound}) => {

    const [search, setSearch] = useState('')
    const pokemonValue = (e) => {
        setSearch(e.target.value.toLowerCase());
        if (e.target.value.length === 0) {
            searchPokemon(null)
        }
    }
    const pokemonSearch = () => {
        searchPokemon(search)
    }
    const selectType = (e) => {
        e.preventDefault()
        searchByType(e.target.value)
    }

    const prevPage = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }
    const nextPage = () => {
        if (page < total) {
            setPage(page + 1)
        }
    }
  return (
    <div className='container'>
        <div>
            <div className='wrapper'>
                <h1 className='title'>BUSQUEDA</h1>
                <div className="search-pokemon">
                    <input type="text" className="input-search" placeholder='Ingresa un pokémon' onChange={pokemonValue}/>
                      <input type="button" className="input-button" value="Buscar" onClick={pokemonSearch} />
                </div>
                      {notFound ? <p className='error'>Pokémon no encontrado</p> : null}
            </div>
            <div className='wrapper'>
                <h1 className='title'>TIPOS</h1>
                <aside className='categories'>
                    <ul className='category-list'>
                    {TiposPokemon.map(tipo => (
                        <button className='category-item' onClick={selectType} value={tipo.id} key={tipo.id}>{tipo.name}</button>
                        
                    ))}
                    </ul>
                </aside>
              </div>
        </div>
        <div className='pokemones-wrapper'>
              <h1 className='title'>POKEMONES <span>({page + 1} / {total})</span></h1>
            <section className='pokemones-grid'>
            {pokemones.map((pokemon, index) => (
                <Pokemon key={index}
                         pokemon={pokemon}
                />
            ))}
              </section>
              <div className="pagination">  
                <button onClick={prevPage}><FaAngleLeft /></button>
                <button onClick={nextPage}><FaAngleRight /></button>
              </div>
          </div>
    </div>
  )
}

export default Content