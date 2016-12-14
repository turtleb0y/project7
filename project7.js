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
var drawing = false
// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
 // what do you want to do when the user presses down
 // on the mouse button?
 drawing = true
})

document.addEventListener("mouseup", function(e) {
 drawing = false
})

document.addEventListener("mousemove", function(e) {
 if(drawing) {
   var point = transformPoint(e)
   drawSquare(point.x,point.y, 15,"blue")
 }
})
