'use client'

import Link from 'next/link'
import PokemonTypes from './PokemonTypes'
import styles from './detail.module.css'
import { pokemonData } from '../pokemonMock'
import {usePokemonId} from '../idStore'
import Image from 'next/image'
import fileImage from "../../public/file.svg"
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
            <Image src={fileImage} id={styles.profile} alt="profile" width={450} height={450} />
            <div className='justify-center border-2 rounded-4xl border-amber-300 text-white p-4'>
                    {Object.keys(Pokemon).map(keys => {
                    const key = keys as keyof typeof Pokemon;
                    
                    return(
                        (key === "types") ? 
                        <div key={key} className={styles.tr}>
                            <div className={styles.key}>types</div>
                            <div className={styles.value}>
                                <PokemonTypes {...Pokemon.types} />
                            </div>
                        </div> : 
                        <div key={key} className={styles.tr}>
                            <div className={styles.key}>{key}</div>
                            <div className={styles.value}>
                                {Array.isArray(Pokemon[key]) ? Pokemon[key].join(", ") : Pokemon[key]}
                            </div>
                        </div>
                    );

                    })}
            </div> 
        </div>
    );
}

export default PokemonDetail;