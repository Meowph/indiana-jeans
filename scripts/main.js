import { ownJeansChoices } from "./ownsJeans.js"
import { SaveSubmission } from "./saveSubmission.js"
import { locationTypeChoices } from "./urbanDweller.js"
import { SubmissionList } from "./submissions.js"

const container = document.querySelector("#container")

const render = async ( ) => {
  const jeanOwnershipHTML = await ownJeansChoices ()
  const locationsHTML = await locationTypeChoices () //asyncronous function in urbanDwllers must complete before this is ran, so await is added
  const buttonHTML = await SaveSubmission ()
  const submissionListHTML = await SubmissionList()

  container.innerHTML = `
      ${jeanOwnershipHTML}
      ${locationsHTML}
      ${buttonHTML}
      ${submissionListHTML}
  `

}

document.addEventListener("newSubmissionCreated", render)//to invoke function everytime a new submission is created, this event is placed in main 

render ()