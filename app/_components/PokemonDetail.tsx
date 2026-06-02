'use client'

import Link from 'next/link'
import PokemonTypes from './PokemonTypes'
import styles from './detail.module.css'
import { pokemonData } from '../pokemonMock'
import {usePokemonId} from '../idStore'
import Image from 'next/image'
import { Button } from '@/components/ui/button'


const PokemonDetail = function(prop : {index : number})
{

    const {PokemonId, setPokemonId} = usePokemonId();
    const id = PokemonId;
    const Pokemon = pokemonData[id - 1];
    //console.log(id);

    if(id === -1) return;

    return(
        <div className='grid grid-cols-1 gap-4 p-3 overflow-y-scroll lg:grid-cols-2 justify-center no-scrollbar'>
            <Image src='/file.svg' id={styles.profile} alt="profile" width={450} height={450} />
            <table className='border-2 rounded-4xl border-amber-300 text-white p-4'>
                <thead></thead>
                <tbody className='-m-80'>
                    {Object.keys(Pokemon).map(keys => {
                    const key = keys as keyof typeof Pokemon;
                    
                    return(
                        (key === "types") ? 
                        <tr key={key}>
                            <td className={styles.key}>types</td>
                            <td className={styles.value}>
                                <PokemonTypes {...Pokemon.types} />
                            </td>
                        </tr> : 
                        <tr key={key}>
                            <td className={styles.key}>{key}</td>
                            <td className={styles.value}>
                                {Array.isArray(Pokemon[key]) ? Pokemon[key].join(", ") : Pokemon[key]}
                            </td>
                        </tr>
                    );

                    })}
                </tbody>
            </table> 
        </div>
    );
}

export default PokemonDetail;