import styles from "./types.module.css"

const PokemonTypes = function(types : string[])
{
    const type1 : string = types[0];
    const type2 : string | null = types[1];
    return(
        
        <div id={styles.typeWrapper}>
            <div className={styles.type} id={styles[type1]}>{type1}</div>
            {type2 ?
            <div className={styles.type} id={styles[type2]}>{type2}</div> :
            null}
        </div>
    );
}

export default PokemonTypes;