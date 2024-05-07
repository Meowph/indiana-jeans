// Set up the transient state data structure and provide initial values
const transientState = {
  "ownsBlueJeans": false,
  "socioLocationId": 0

}


// Functions to modify each property of transient state
export const setOwnsblueJeans = (chosenOwnership) => {
  transientState.ownsBlueJeans = chosenOwnership
}


// Function to convert transient state to permanent state