'use client'
import {create} from "zustand"


export interface Pokemon {
  name: string,
  height: number,
  weight: number,
  types: string[],
  'base-Experience': number,
  abilities: string[],
  hp: number,
  attack: number,
  defense: number,
  'special-attack': number,
  'special-defense': number,
  speed: number
}

interface PokemonIdState {
    PokemonId : number,
    setPokemonId : (id:number) => void,
}

export const usePokemonId = create<PokemonIdState>(
    (set) => ({
        PokemonId : -1,
        setPokemonId : (Id : number) => {set({PokemonId : Id})} 
    })
);
