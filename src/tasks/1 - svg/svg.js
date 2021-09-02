//
// Heleper method for creating SVG-elements
//
const createSVGElement = document.createElementNS.bind(document, 'http://www.w3.org/2000/svg')


// THE TASKS ===================================================================
//
// 1. Start by creating a SVG element and append it to the DOM.
// 2. Draw the data from data() into the SVG as points
// 3. Draw lines between the points
// 4. Something else?
// 5. Profit
//
// Tips:
// - you can use elements like: circle and line
// =============================================================================

//
// YOUR CODE HERE
//



//
// Data is available through the data() function, i.e.:
//   data().map((d) => {})
//
console.log(data())

function data() {
  return [
    {
      x: 20,
      y: 50
    },
    {
      x: 50,
      y: 350
    },
    {
      x: 100,
      y: 300
    },
    {
      x: 150,
      y: 360
    },
    {
      x: 200,
      y: 50
    },
    {
      x: 250,
      y: 40
    },
    {
      x: 300,
      y: 140
    },
    {
      x: 350,
      y: 300
    },
    {
      x: 400,
      y: 180
    },
  ]
}
