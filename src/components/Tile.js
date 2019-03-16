import React from 'react';

const Tile = (props) => {
  return (
    <div className="square">
      <button onClick={() => props.selectTile(props.id)}>
        Select
      </button>
      {props.selected}
    </div>
  )
}

export default Tile;

