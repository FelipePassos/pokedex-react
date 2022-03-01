import Style from './Display.module.css';
import axios from "axios";
import { useEffect, useState } from "react";


function Display() {
    

    let [poke, setPoke]=useState({});
    let [input, setInput] = useState('pikachu')
    let namePokemon;
    let heightPokemon;
    let spritesPokemon = []

    let handleSubmit = (e) => {
        e.preventDefault();
        input = document.getElementById("texto").value;
        setInput(input);
        console.log(input);
    }
   
    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then( res => {
          const dadosPoke = res.data;
          setPoke(dadosPoke);
        })
      }, [input]
    )
  
    let mapear = () => ( 
        Object.keys(poke).forEach( (key) => {
         
            if(key === 'name') {
                namePokemon = poke[key];
            }
            if(key === 'height') {
                heightPokemon = poke[key];
            }
            if(key === 'sprites') {
                spritesPokemon = poke[key].other["official-artwork"].front_default;
            }
        })
    )
        mapear();

    return (
        <>
            <div className={Style.header}>
                <div className={Style.container}>
                    <section>
                        <h1>Pokemon</h1>
                    </section>
                    <form onSubmit={handleSubmit}>
                        <input id="texto" className={Style.input} />
                        <button type="submit" id="botao">enviar</button>
                    </form>
                </div>
            </div>
            <div className={Style.pai}>
                <div className={Style.card}>
                    <div className={Style.pokeFoto}><img alt='pokemon' src={spritesPokemon} /></div><div className={Style.pokeStats}></div>
                </div>
            </div>
            <>
            <div>
            nome: {namePokemon}
            </div>
            <div>
            altura: {heightPokemon}
            </div>

            </>
        </>



    );
}

export default Display;