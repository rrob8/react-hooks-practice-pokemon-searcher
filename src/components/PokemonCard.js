import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const [face, setFace] = useState(true)

  function handleClick () {
    setFace(!face)
  }

  return (
    <Card>
      <div
      onClick={handleClick}
      >
        <div className="image">
          <img 
          src={face == true ? pokemon.sprites.front : pokemon.sprites.back }
          alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
