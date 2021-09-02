const svgElement = d3.create('svg')
      .attr('viewport', '0 0 500 500')
      .attr('width', 500)
      .attr('height', 500)


// -----------------------------------------------------------------------------

// <svg>
//   <path d="M 50 450 C 225 450, 225 50, 450 50" stroke="black" fill="transparent" />
// </svg>


// svgElement.append('path')
//   .attr('d', 'M 50 450 C 225 450, 225 50, 450 50')
//   .attr('stroke', 'black')
//   .attr('fill', 'transparent')


//
// ---------------------------------
//




const start = Point(50, 450)
const end = Point(450, 50)

const points = [
  Point(450/2, 450),
  Point(450/2, 50),
]

svgElement.append('path')
  .attr('id', 'curve')
  .attr('stroke', '#888')
  .attr('stroke-width', 3)
  .attr('fill', 'transparent')
  .attr('d', draw(d3.path(), points))

drawHelpers(points)

document.body.appendChild(svgElement.node())

svgElement.append('circle')
  .attr('fill', 'hotpink')
  .attr('cx', '')
  .attr('cy', '')
  .attr('r', 6)
  .append('animateMotion')
  .attr('dur', 2.5)
  .attr('repeatCount', 'indefinite')
  .append('mpath')
  .attr('xlink:href', '#curve')







//
// Helper functions
//
function draw(context, points) {
  const curve = [...points[0].toArray(), ...points[1].toArray(), ...end.toArray()]
  context.moveTo(...start.toArray())
  context.bezierCurveTo(...curve)
  return context.toString()
}

function drawLine(line) {
  svgElement.append('path')
    .attr('stroke', 'black')
    .attr('stroke-width', 0.8)
    .attr('d', d3.line()(line))
}

function drawHelpers(points) {
  points.forEach((point) => point.draw(svgElement))

  drawLine([start.toArray(), points[0].toArray()])
  drawLine([end.toArray(), points[1].toArray()])
}



