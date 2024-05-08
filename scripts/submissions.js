export const SubmissionList = async () => {

  // Get the submissions from your API
  const response = await fetch("http://localhost:8088/submissions") //ibnstead of using gets from database, fetch is used to access the array of data stored in database.js
  const submissions = await response.json()

  // Iterate the submissions and create some <section> representations
  let submissionHTML = ""
  for (const submission of submissions) {

      submissionHTML += `
        <section id="submission">
          <dv>Owns Jeans? ${submission.ownsBlueJeans}</dv>
          <div>Area type foreign key? ${submission.socioLocationId}</div>
        </section>`
  }

  // Return the HTML string
  return submissionHTML
}