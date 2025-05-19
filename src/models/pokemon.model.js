import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PokemonSchema = new Schema({
    name: { type: String, required: true, unique: true},
    type: { type: [String], required: true },
    cod: { type: Number, required: true}
},
{
    timestamps: true
})

export const Pokemon = model('Pokemon', PokemonSchema)