import React from 'react';
import PlayerCard from './PlayerCard';

const Players = ({ dogs, onShowDetails }) => {
  return (
    <>
      <div id='all-players-container'>
        {dogs.map((dog, index) => (
          <PlayerCard key={index} dog={dog} onShowDetails={onShowDetails} />
        ))}
      </div>
    </>
  );
};

export default Players;
