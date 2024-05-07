/* 
    Responsiblity: Provide UI controls for your survey taker to choose 'yes' or 'no' for ownership of blue jeans
    
    Strategy: 
      1. A component function that produces HTML for two radio buttons for 'Yes' and 'No'
*/

export const ownJeansChoices = () => {

  let html = "<h2>Do you own a pair of blue jeans?</h2>"
  html += "<input type='radio' name='ownsJeans' value='true' /> Yes"
  html += "<input type='radio' name='ownsJeans' value='false' /> No"
  return html

}