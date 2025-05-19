import { PokemonRepository } from '../repositories/pokemon.repository.js'

export const PokemonService = {
    async create(data) {
        const created = await PokemonRepository.create(data)
        return created;
    }
}