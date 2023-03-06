import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";


function PokemonCollection({pokemon}) {
  
  //map function for fetch
  const renderPoke = pokemon.map(pokeObj => {
    return <PokemonCard
    pokeObj={pokeObj}
    key={pokeObj.id}
    />
  })


  return (
    <Card.Group itemsPerRow={6}>
      {renderPoke}
      <h1>Hello From Pokemon Collection</h1>
    </Card.Group>
    
  );
}

export default PokemonCollection;
