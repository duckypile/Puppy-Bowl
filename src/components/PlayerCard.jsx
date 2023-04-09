import React from 'react';

const PlayerCard = ({ dog, onShowDetails }) => {
  if (!dog) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="single-player-card" key={dog.id} dog={dog}>
        <p>{dog.name}</p>
        <p>{dog.breed}</p>
        <p>{dog.id}</p>
        <img className="single-player-card img" src={dog.imageUrl} />
        <button className="puppyButton" onClick={() => onShowDetails(dog)}>
          See Details
        </button>
      </div>
    </>
  );
};

export default PlayerCard;
