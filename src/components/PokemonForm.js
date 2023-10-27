import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {
  
  const [name, setName ] = useState('Bulb')
  const [hp, setHp] = useState(45)
   const [front, setFront] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png')
  const [back, setBack] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png')

  function handleFrontChange (e) {
         
     setFront(e.target.value)
    
  }
  function handleBackChange (e){
    setBack(e.target.value)
  }

  function handleNameChange (e) {
    setName(e.target.value)
  }
  function handleHpChange (e) {
    setHp(e.target.value)
  }


  function handleSubmit (e) {
    e.preventDefault();
    const addedPokemon = {
      name: name,
      hp: hp,
      sprites:{
        front:front,
        back: back,
      },
    }
    onAddPokemon(addedPokemon)
  };

  
 
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
          onChange={handleNameChange}
          fluid label="Name" placeholder="Name" name="name" />
          <Form.Input 
          onChange={handleHpChange}
          fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
          onChange={handleFrontChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
          />
          <Form.Input
          onChange={handleBackChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
