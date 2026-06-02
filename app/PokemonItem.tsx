'use client'

import { Pokemon, pokemonData } from './pokemonMock';
import styles from './list.module.css';
import Image from "next/image";
import Link from "next/link";
import { usePokemonId } from './idStore';
import { listPokemon } from './page';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import PokemonDetail from './_components/PokemonDetail';

const PokemonItem = function(Pokemon : listPokemon)
{

    const {PokemonId, setPokemonId} = usePokemonId();


    return(
        <Dialog>
            <DialogTrigger asChild>
                <div className={styles.Card} onClick={()=>{setPokemonId(Pokemon.id)}}>
                    <Image src="/file.svg" alt = "ItemProfile" className={styles.profile} width={1000} height={1000} />
                    <div className='flex flex-col gap-4 min-w-30'>
                        <h2 className='text-md font-bold'>{Pokemon.name}</h2>
                        <p> types : {Pokemon.typesStr.join(", ")}</p>
                        <p>height : {Pokemon.height}</p>
                        <p>weight : {Pokemon.weight}</p>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent showCloseButton = {false} className='bg-black max-w-60 lg:max-w-11/12 h-11/12'>
                <DialogHeader>
                    <DialogTitle className='text-white font-bold'>Detail</DialogTitle>
                    <DialogDescription>
                        Detail Informations for {PokemonId <= 0 ? 'none' :pokemonData[PokemonId - 1].name}
                    </DialogDescription>
                </DialogHeader>

                <PokemonDetail index={Pokemon.id}/>

                <DialogFooter className='bg-black border-none grid grid-cols-3 gap-16'>
                    {PokemonId == 1 ? <div/> : <Button className={styles.IndexButton} onClick={()=>{setPokemonId(PokemonId - 1)}}> ◀ Prev </Button> }
                    <DialogClose asChild>
                        <Button type ="button" className={styles.IndexButton} onClick={() => setPokemonId(-1)}>
                            HOME
                        </Button>
                    </DialogClose>
                    {PokemonId == 10 ? <div/> : <Button className={styles.IndexButton} onClick={()=>{setPokemonId(PokemonId + 1)}}> Next ▶ </Button> }
                </DialogFooter>
            </DialogContent>
        </Dialog>
        
    );
}

export default PokemonItem;
