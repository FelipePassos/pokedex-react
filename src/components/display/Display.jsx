import Style from './Display.module.css';
import axios from "axios";
import { useEffect, useState } from "react";

function Display() {

    let [poke, setPoke]=useState({});
    let [input, setInput] = useState('pikachu')
    let namePokemon;
    let heightPokemon;
    let weightPokemon;
    let spritesPokemon = [];
    let typesPokemon = [];
    let abilitiesPoke = [];

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
          //  console.log(key);
          //  console.log(poke[key]);
         
            if(key === 'name') {
                namePokemon = poke[key];
            }
            if(key === 'height') {
                heightPokemon = poke[key];
            }
            if(key === 'sprites') {
                spritesPokemon = poke[key].other["official-artwork"].front_default;
            }
            if(key === 'types') {
                typesPokemon = poke[key];  
            }
            if(key === 'weight') {
                weightPokemon = poke[key];
            }
            if(key === 'abilities') {
                abilitiesPoke = poke[key];
            }
        })
    )
        mapear();

    return (
        <>
            <div className={Style.header}>
                <div className={Style.container}>
                        <span> <a className={Style.pokeTitulo}>Pokemon</a> </span>

                    <span className={Style.pokePesquisa}>
                    <form className={Style.formImput} onSubmit={handleSubmit}>
                        <input id="texto" className={Style.input} />
                        <button type="submit" className={Style.botao}>🔎</button>
                    </form>
                    </span>
                </div>
            </div>
            <div className={Style.pai}>
                <div className={Style.card}>
                    <div className={Style.pokeFotoDiv}><img className={Style.pokeFoto} alt='pokemon' src={spritesPokemon} /></div><div className={Style.pokeStats}>
                        <h2 className={Style.pokesName}>{namePokemon}</h2>
                        <div className={Style.rowInfo}>
                            <h3 className={Style.atributesTitle}>ATRIBUTES</h3>
                            {typesPokemon.map((key) => {
                               return <span className={Style.atributes} key={key.type.name}>{key.type.name}</span>;
                            })}
                        </div>
                        <div className={Style.rowInfo}>
                            <h3 className={Style.atributesTitle}>ABILITIES</h3>
                            {abilitiesPoke.map((key) => {
                               return <span className={Style.abilities} key={key.ability.name}> {key.ability.name} </span>;
                            })}
                        </div>
                        
                    </div>
                </div>
            </div>
            <>
            <div>
            </div>


            </>
        </>



    );
}

export default Display;