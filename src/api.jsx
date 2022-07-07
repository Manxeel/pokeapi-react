
export const getPokemons = async (limit = 25, offset = 0) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
        const respuesta = await fetch(url)
        return await respuesta.json()

    } catch (err) {}
}

export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json();
    } catch (err) {}
    
}
export const getPokemonsByType = async (type) => {
    try {
        const url = `https://pokeapi.co/api/v2/type/${type}/`
        const respuesta = await fetch(url)
        return await respuesta.json()       
    } catch (err) {}
}
export const getPokemonByName = async (name) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`
        const respuesta = await fetch(url)
        return await respuesta.json()
    } catch (err) {}
}