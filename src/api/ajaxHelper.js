// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2303-ftb-et-web-ft-demo';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${APIURL}/players`);
    const {
      success,
      error,
      data: { players },
    } = await response.json();
    if (error) throw error;
    // console.log(data);
    // const { players } = data;
    return players;
  } catch (error) {
    console.error('Oh no! There was an error in fetchAllPlayers!', error);
  }
};

export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}/players/${playerId}`);
    const {
      success,
      error,
      data: { player },
    } = await response.json();
    // if (error) throw error;
    console.log(player);
    // const { players } = data;
    return player;
  } catch (error) {
    console.error('Oh no! There was an error in fetchSinglePlayer!', error);
  }
};