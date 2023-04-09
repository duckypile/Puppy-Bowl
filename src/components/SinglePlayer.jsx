import React from 'react';

const SinglePlayer = ({ dog, onBack }) => {
  return (
    <>
      <div className='single-player-view'>
        <h2>{dog.name}</h2>
        <p>Breed: {dog.breed}</p>
        <p>ID: {dog.id}</p>
        <img src={dog.imageUrl} alt={dog.name} />
        <button onClick={onBack}>Back to All Puppies</button>
      </div>
    </>
  );
};

export default SinglePlayer;
