import { ownJeansChoices } from "./ownsJeans.js"
import { locationTypeChoices } from "./urbanDweller.js"

const container = document.querySelector("#container")

const render = async ( ) => {
  const jeanOwnershipHTML = ownJeansChoices ()
  const locationsHTML = await locationTypeChoices () //asyncronous function in urbanDwllers must complete before this is ran, so await is added

  container.innerHTML = `
      ${jeanOwnershipHTML}
      ${locationsHTML}
  `

}

render ()