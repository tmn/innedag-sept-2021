//
// POINT
//
function _Point(x, y) {
  this.x = x
  this.y = y
}

_Point.prototype.draw = function (svgElement) {
  svgElement.append('circle')
    .attr('fill', 'red')
    .attr('r', 4)
    .attr('cx', this.x)
    .attr('cy', this.y)
}

_Point.prototype.toArray = function () {
  return [this.x, this.y]
}

function Point(x, y) {
  return new _Point(x, y)
}
