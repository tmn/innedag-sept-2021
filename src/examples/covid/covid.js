window.data = window.data || []

const height = 500
const labelPadding = 6
const width = 800

const columns = [
  'Positive',
  'Negative'
]

const covidData = data.map((data) => (
  {
    ...data,
    Negative: +data.Negative,
    Positive: +data.Positive,
    date: new Date(data.date)
  }
))
  .sort((a, b) => a.date - b.date)
  .slice(data.length - 10)

const covidDataSeries = columns.map((key) => covidData.map(({ [key]: value, date }) => ({ key, value, date })))

const margin = {
  top: 30,
  right: 50,
  bottom: 30,
  left: 30
}

const x = d3.scaleTime()
  .domain([covidData[0].date, covidData[covidData.length - 1].date])
  .range([margin.left, width - margin.right]).clamp(true)

const y = d3.scaleLinear()
  .domain([0, d3.max(covidDataSeries, (s) => d3.max(s, (d) => d.value))])
  .range([height - margin.bottom, margin.top])

const z = d3.scaleOrdinal(columns, d3.schemeCategory10)

const xAxis = (g) => g
  .attr('transform', `translate(0,${height - margin.bottom})`)
  .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))

const chart = () => {
  const svgEl = d3.create('svg')
    .attr('viewBox', [0, 0, width, height])
    .attr('width', width)
    .attr('height', height)

  svgEl.append('g')
    .call(xAxis)

  const serie = svgEl.append('g')
    .selectAll('g')
    .data(covidDataSeries)
    .join('g')

  serie.append('path')
    .attr('fill', 'none')
    .attr('stroke', d => z(d[0].key))
    .attr('stroke-width', 1.5)
    .attr('d', d3.line()
      .x(d => x(d.date))
      .y(d => y(d.value)))

  serie.append('g')
    .attr('font-family', 'sans-serif')
    .attr('font-size', 10)
    .attr('stroke-linecap', 'round')
    .attr('stroke-linejoin', 'round')
    .attr('text-anchor', 'middle')
    .selectAll('text')
    .data(d => d)
    .join('text')
    .text(d => d.value)
    .attr('dy', '0.35em')
    .attr('x', d => x(d.date))
    .attr('y', d => y(d.value))
    .call(text => text.filter((d, i, data) => i === data.length - 1)
      .append('tspan')
      .attr('font-weight', 'bold')
      .text(d => ` ${d.key}`))
    .clone(true).lower()
    .attr('fill', 'none')
    .attr('stroke', 'white')
    .attr('stroke-width', labelPadding)

  return svgEl.node()
}

document.body.appendChild(chart())
