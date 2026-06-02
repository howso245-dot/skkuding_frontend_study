
//import { pokemonData } from './pokemonMock';
import PokemonItem from './_components/PokemonItem';

export interface type{
    type: {name : string}
}

export interface listPokemon {
    id : number,
    name : string,
    types : type[],
    typesStr : string[],
    height : number,
    weight : number
}

const PokemonList = async function()
{


    async function Fetch(url : string){
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }


    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    //console.log(response);
    const data = await response.json();
    const responseDetail = await data.results.map(async (pokemon : {url : string}) => {
        return(await Fetch(pokemon.url));
    })
    const pokemonData : listPokemon[] = await Promise.all(responseDetail);
    //console.log(pokemonData[0].types);
    //console.log("pokemonData: ", pokemonData[0]);
    //console.log(Array.isArray(pokemonData[0].types));

    pokemonData.map((pokemon)=>{
        pokemon.typesStr = pokemon.types.map((typeObj)=>{
            return typeObj.type.name;
        });
    });

    

    return(
        <div className='grid grid-cols-1 gap-3 pt-2 lg:grid-cols-2'>
            {pokemonData.map((pokemon)=>{return(
                <PokemonItem {...pokemon} key={pokemon.name}/>
            );})}
        </div>
    );
}

export default PokemonList;