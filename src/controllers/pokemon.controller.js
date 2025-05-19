import { PokemonService } from '../services/pokemon.service.js'


export const PokemonController = {
    async create(req, res) {
        console.log(req.body)
        const created  = await PokemonService.create(req.body)
        res.status(201).json(created)
    }
}