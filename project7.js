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
function drawRectangle(x, y, width, color) {
  // square drawing code here
  var newrect = document.createElementNS(namespace, "rect")
  newrect.setAttribute("x", x)
  newrect.setAttribute("y", y)
  newrect.setAttribute("width", width)
  newrect.setAttribute("height", width)
  newrect.setAttribute("fill", color);
  screen.appendChild(newrect)
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
  var pt = transformPoint(e, screen)
  drawing = true
  var color = (document.getElementById("colorSelect").value)
  var shape = (document.getElementById("shapeSelect").value)
  var size = (document.getElementById("sizeSelect").value)
  var pt = transformPoint(e, screen)
  if(drawing == true){
  }
  if(shape == "circle"){
    drawCircle(color, size, pt.x, pt.y)
  }
  else{
    drawRectangle(color, size, pt.x, pt.y)
  }
})

document.addEventListener("mouseup", function(e) {
  var pt = transformPoint(e, screen)
  drawing = false
})

document.addEventListener("mousemove", function(e) {
  var color = document.getElementById("colorSelect").value
  var shape = document.getElementById("shapeSelect").value
  var size = document.getElementById("sizeSelect").value
  var pt = transformPoint(e)
  if(drawing == true) {
   if(shape == "circle"){
     drawCircle(color,size, pt.x, pt.y)
   }
   else{
     drawRectangle(color,size, pt.x, pt.y)
   }

   //drawSquare(point.x,point.y, 25,"red")
   //drawCircle(point.x,point.y, 5,"blue")
  }
})
