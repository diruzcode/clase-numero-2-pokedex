import { Router } from "express";
import { PokemonController } from "../controllers/pokemon.controller.js";

export const pokemonRouter = Router();

pokemonRouter
.post('/', PokemonController.create)