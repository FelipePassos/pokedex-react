import Style from './Card.module.css'
function Card ({imagemPoke}) {
    return(
        <div className={Style.pai}>
            <div className={Style.card}>
                <div className={Style.pokeFoto}><img alt='pokemon' src={imagemPoke}/></div><div className={Style.pokeStats}></div>
            </div>
        </div>
    );
}

export default Card;