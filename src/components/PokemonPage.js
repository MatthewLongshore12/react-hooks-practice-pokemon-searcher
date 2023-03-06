import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";


function PokemonPage() {

  //state for fetching pokemon and searching pokemon state
  const[pokemon, setPokemon] = useState([])
  const[searchTerm, setSearchTerm] = useState("")

  //addPokemon 
  const addPoke = pokeObj => {
    setPokemon( [...pokemon, pokeObj] )
  }

  //search bar handler
  const handleSetSearchTerm = e => {
    setSearchTerm( e.target.value )
  }

  useEffect( () => {
    fetch( 'http://localhost:3001/pokemon' )
    .then( r => r.json() )
    .then( pokemon => setPokemon(pokemon) )
  }, [])

  //functionality for search bar
  const showPoke = pokemon.filter(pokeObj => pokeObj.name.includes(searchTerm))
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPoke={addPoke} />
      <br />
      <Search onSetSearchTerm={handleSetSearchTerm} />
      <br />
      <PokemonCollection pokemon={showPoke}/>
    </Container>
  );
}

export default PokemonPage;
