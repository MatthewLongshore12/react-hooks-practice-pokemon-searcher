import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPoke}) {
  
  //states for form
  const[ newName, setName ] = useState('')
  const[ newHP, setHP ] = useState('')
  const[ frontSprite, setFrontSprite ] = useState('')
  const[ backSprite, setBackSprite] = useState('')

  //handlers for form
  const handleName = e => { setName(e.target.value) }
  const handleHP = e => { setHP(e.target.value) }
  const handleFrontSprite = e => { setFrontSprite(e.target.value) }
  const handleBackSprite = e => { setBackSprite(e.target.value) }

  //submit handler with post request inside
  const handleSubmit = e => {
    e.preventDefault()

    const newForm = {
      name: newName,
      hp: newHP,
      sprites: {
        front: frontSprite,
        back: backSprite
      }
    }
    fetch( 'http://localhost:3001/pokemon', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newForm)
    })
    .then( r => r.json() )
    .then( addPoke )
    e.target.reset()
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={ handleSubmit }
      >
        <Form.Group widths="equal">
          <Form.Input onChange={ handleName } 
          fluid label="Name" placeholder="Name" name="name" />

          <Form.Input onChange={ handleHP } 
          fluid label="hp" placeholder="hp" name="hp" />

          <Form.Input
            onChange={ handleFrontSprite }
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={ handleBackSprite }
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
