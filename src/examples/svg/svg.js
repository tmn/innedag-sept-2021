const createSVGElement = document.createElementNS.bind(document, 'http://www.w3.org/2000/svg')

const svg = createSVGElement('svg')
svg.setAttribute('viewport', '0 0 500 400')
svg.setAttribute('height', 400)
svg.setAttribute('width', 500)
svg.style.backgroundColor = 'hotpink'

const line = drawLine(0, 200, 500, 200)
line.setAttribute('stroke', '#fff')

const points = data().map((d, i, list) => {
  // draw circles
  const circle = createSVGElement('circle')
  circle.setAttribute('cx', d.x)
  circle.setAttribute('cy', d.y)
  circle.setAttribute('r', 4)
  circle.setAttribute('fill', 'rebeccapurple')

  // draw lines
  let line = null;
  if (i > 0) {
    line = drawLine(list[i - 1].x, list[i - 1].y, d.x, d.y)
    line.setAttribute('stroke', 'white')
  }

  return { circle, line }
})

//
// Appending stuff
//
svg.appendChild(line)

points.forEach(({ line }) => {
  if (line) {
    svg.appendChild(line)
  }
})

points.forEach(({ circle }) => {
  svg.appendChild(circle)
})

document.body.appendChild(svg)

//
// Helper method for draing lines
//
function drawLine(x1, y1, x2, y2) {
  const line = createSVGElement('line')
  line.setAttribute('x1', x1)
  line.setAttribute('y1', y1)
  line.setAttribute('x2', x2)
  line.setAttribute('y2', y2)
  return line
}

//
// Retreive data using data()
//
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
