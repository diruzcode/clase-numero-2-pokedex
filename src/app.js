import express from 'express'
import { pokemonRouter } from './routes/pokemon.route.js';

export function createApp(){

    const app =  express();
    app.use(express.json());
    app.use('/api/pokemon', pokemonRouter)
    return app;
}