import React, { useEffect, useState } from 'react';
import Players from './Players';
import SinglePlayer from './SinglePlayer';
import { fetchAllPlayers } from '../api/ajaxHelper';
import SearchBar from './PlayerForm';

const Main = () => {
  const [dogs, setDogs] = useState([]);
  const [selectedDog, setSelectedDog] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchData() {
      const players = await fetchAllPlayers();
      setDogs(players);
    }
    fetchData();
  }, []);

  const handleShowDetails = (dog) => {
    setSelectedDog(dog);
    setShowDetails(true);
  };

  const handleBack = () => {
    setShowDetails(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchDogs = (dogs, searchTerm) => {
    return dogs.filter((dog) =>
      dog.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredDogs = searchDogs(dogs, searchTerm);

  return (
    <>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      {showDetails ? (
        <SinglePlayer dog={selectedDog} onBack={handleBack} />
      ) : (
        <Players dogs={filteredDogs} onShowDetails={handleShowDetails} />
      )}
    </>
  );
};

export default Main;
