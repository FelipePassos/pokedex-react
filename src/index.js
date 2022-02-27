import React  from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card/Card';
import Header from './components/header/Header';
import Api from './services/Api';

let pokemon = [];

Api.get("pikachu").then(({ data }) => {
    pokemon.push(data);
});

console.log(pokemon);




ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);


