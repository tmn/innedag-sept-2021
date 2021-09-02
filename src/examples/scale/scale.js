// import * as d3 from 'd3'

const svgEl = d3.create('svg')
svgEl.attr('viewbox', '0 0 300 400')
svgEl.attr('width', 600)
svgEl.attr('height', 400)
svgEl.style('background', '#222')

const xScale = d3.scaleLinear().domain([0, data().length - 1]).range([0 + 60, 600 - 60]).clamp(true)

const color = d3.scaleLinear().domain(d3.extent(data(), (d) => d.value)).range(['hsl(297, 100%, 100%)', 'hsl(297, 50%, 50%)'])
const size = d3.scaleLinear().domain(d3.extent(data(), (d) => d.value)).range([10, 80])

const circleGroup = svgEl
  .selectAll('g')
  .data(data())
  .join('g')

circleGroup.append('circle')
  .attr('cx', (d, i) => xScale(i))
  //.attr('cx', 600/2)
  .attr('cy', 400/2)
  .attr('r', (d) => size(d.value))
  .attr('stroke', 'white')
  .attr('stroke-width', 4)
  .attr('fill', 'none')
  .on('click', function (d,i) {
    d3.select(this)
      .attr('stroke-dasharray', 2 * size(i.value) * 3.14)
      .attr('stroke-dashoffset', 0)
      .transition()
      .duration(3000)
      .attr("stroke-dashoffset", 2 * size(i.value) * 3.14);
  })
  .attr('fill', d => color(d.value))

circleGroup.append('text')
  .attr('transform', (d, i) => `translate(${xScale(i)}, ${400/2 + size(d.value) + 20})`)
  .attr('text-anchor', 'middle')
  .attr('font-family', 'arial, sans-serif')
  .attr('font-size', 14)
  .text((d) => d.city)
  .attr('fill', 'white')





document.body.appendChild(svgEl.node())













// ======================  DATA GOES HERE =======================


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
