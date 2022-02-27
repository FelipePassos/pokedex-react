import React  from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card/Card';
import Header from './components/header/Header';
import Api from './services/Api';

let pokeAbilities = [];
let nomeAbilities;

Api.get("pikachu").then(({ data }) => {
  pokeAbilities.push(data.abilities);

});

console.log(pokeAbilities);

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);


