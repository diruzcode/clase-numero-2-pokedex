import { Pokemon } from '../models/pokemon.model.js'

export const PokemonRepository = {
    create: (data) => Pokemon.create(data)
}