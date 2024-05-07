import { socioLocationId } from "./transientState.js"

const handlelocationChange = (changeEvent) => {
  if (changeEvent.target.name === "location") {
      const convertedToInteger = parseInt(changeEvent.target.value)
      socioLocationId(convertedToInteger)
  }
}

//Converting database info with fetch 
export const locationTypeChoices = async() => {
  const response = await fetch ('http://localhost:8088/socioLocations')
  const locations = await response.json()

  document.addEventListener("change", handlelocationChange)

  let choicesHTML = "<h2>What type of area do you line in?</h2> "
  for (const location of locations) {
    choicesHTML += `<input type='radio' name='location' value='${location.id}'/> ${location.label}`
  }

  return choicesHTML
}