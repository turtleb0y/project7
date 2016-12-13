var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color) {
  // square drawing code here
  var newsquare = document.createElementNS(namespace, "rect")
  newsquare.setAttribute("x", x)
  newsquare.setAttribute("y", y)
  newsquare.setAttribute("width", size)
  newsquare.setAttribute("height", size)
  newsquare.setAttribute("fill", color);
  screen.appendChild(newsquare)
}

function drawCircle(cx, cy, radius, color) {
  var newcircle = document.createElementNS(namespace, "circle")
  newcircle.setAttribute("cx", cx)
  newcircle.setAttribute("cy", cy)
  newcircle.setAttribute("r", radius)
  newcircle.setAttribute("fill", color)
  screen.appendChild(newcircle)
}
// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  //var pt = transformPoint(e)
  //var selectShape = document.getElementById("shapeSelect").value
  //var selectColor
  //if(selectShape == "circle")
})

document.addEventListener("mousemove", function(e) {
  var pt = transformPoint(e)
  var selectShape = document.getElementById("shapeSelect").value
  var selectColor
  if(selectShape == "circle")
})

document.addEventListener("mouseup", function(e) {

})
