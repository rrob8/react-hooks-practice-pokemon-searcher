import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {


  const [pokeDisplay, setPokeDisplay] = useState([])
  const [searchTerm , setSearchTerm] = useState('')
  const [newPokemon, setNewPokemon] = useState([])

   useEffect(()=> {
    fetch(` http://localhost:3001/pokemon`)
    .then(r=> r.json())
    .then(data=> setPokeDisplay(data))

  },[])

  function search ( newSearchTerm) {
    setSearchTerm(newSearchTerm)
      
    }
  
    useEffect(()=>{
      fetch(` http://localhost:3001/pokemon`)
      .then(r=> r.json())
      .then(data=> {
        const pokeFind = data.filter(pokemon=> pokemon.name.startsWith(searchTerm))
      setPokeDisplay(pokeFind)
    })
        
    },[searchTerm])
  
    function addPokemon (newestPokemon) {
      setNewPokemon(newestPokemon)
     
     
     
    }
  
    useEffect(()=>{
     
      
      if(newPokemon.length !== 0 ) {

        console.log(newPokemon)
        const newCollection = [...pokeDisplay, newPokemon]
        setPokeDisplay(newCollection)

        fetch(`http://localhost:3001/pokemon`,{
          method:'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPokemon),
        
        })
      }
      
    },[newPokemon])
  


 
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={addPokemon} />
      <br />
      <Search onSearch={search}/>
      <br />
      <PokemonCollection pokeDisplay={pokeDisplay} />
    </Container>
  );
  }

export default PokemonPage;
