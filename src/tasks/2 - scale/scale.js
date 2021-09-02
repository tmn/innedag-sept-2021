//
// d3 is available in the global scope. Just start writing d3 code, i.e.:
//   d3.create('svg')
//

// THE TASKS ===================================================================
//
// 1. Start by creating a SVG element and append it to the DOM.
// 2. Draw the data from data() into the SVG
// 3. Visualize the difference in values using colors (rgba, or hsl,
//    or own hex values)
// 4. Change scale method to visualize the difference in values using size
// 5. Something else?
// 6. Profit
//
// Tips:
// - Check out scale functions like: d3.scaleLinear().domain([...]).range([...])
// - Use selectAll(..).data(..).join(..) to read out and join data,
//   or just map it youself
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
      city: 'Oslo',
      value: 1036069,
    },
    {
      city: 'Brisbane',
      value: 2260000,
    },
    {
      city: 'New York',
      value: 8140000,
    },
    {
      city: 'Nairobi',
      value: 4390000,
    },
  ]
}
