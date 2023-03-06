import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokeObj}) {

  //state for front and back(starting with front)
  const[showSide, setShowSide] = useState("front")

  //function to handle clicks between front and back
  const handleSide = () => {
    setShowSide(showSide === "front" ? "back" : "front")
  }
  
  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={handleSide} src={pokeObj.sprites[showSide]}alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokeObj.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokeObj.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
