function getBezierXY(t, sx, sy, cp1x, cp1y, cp2x, cp2y, ex, ey) {
  return {
    x: Math.round(Math.pow(1 - t, 3) * sx + 3 * t * Math.pow(1 - t, 2) * cp1x + 3 * t * t * (1 - t) * cp2x + t * t * t * ex),
    y: Math.round(Math.pow(1 - t, 3) * sy + 3 * t * Math.pow(1 - t, 2) * cp1y + 3 * t * t * (1 - t) * cp2y + t * t * t * ey),
  }
}

function updateCanvas() {
  console.clear()
  // 캔버스와 그래픽 컨텍스트를 가져옵니다.
  var canvas = document.getElementById("canvas")
  var ctx = canvas.getContext("2d")

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  var canvasX = canvas.width
  var canvasY = canvas.height
  var valueScale = 1000 // 2배 확대 예시
  var canvasScale = 4

  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.transform(1, 0, 0, -1, 0, canvasY)

  // 입력된 P0, P1, P2, P3의 좌표를 가져옵니다.
  // var sx = parseFloat(document.getElementById('sx').value);
  // var sy = parseFloat(document.getElementById('sy').value);
  var sx = 0
  var sy = 0

  var ex = parseFloat((1 / parseFloat(document.getElementById("ex").value)).toFixed(2))
  var ey = parseFloat(document.getElementById("ey").value).toFixed(2)

  var cp1y = parseFloat(document.getElementById("cp1y").value * ey).toFixed(2)
  var cp1x = parseFloat((1 - cp1y) * ex).toFixed(2)
  // var cp1y = parseFloat(document.getElementById("cp1y").value)

  var cp2y = parseFloat(document.getElementById("cp2y").value * ey).toFixed(2)
  var cp2x = parseFloat((1 - cp2y) * ex).toFixed(2)
  // var cp2y = parseFloat(document.getElementById("cp2y").value)

  sx1000 = (sx * valueScale) / canvasScale
  sy1000 = (sy * valueScale) / canvasScale
  ex1000 = (ex * valueScale) / canvasScale
  ey1000 = (ey * valueScale) / canvasScale

  cp1x1000 = (cp1x * valueScale) / canvasScale
  cp1y1000 = (cp1y * valueScale) / canvasScale
  cp2x1000 = (cp2x * valueScale) / canvasScale
  cp2y1000 = (cp2y * valueScale) / canvasScale

  // Y - axis
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(0, canvasY * canvasScale)
  ctx.strokeStyle = "black"
  ctx.lineWidth = 1
  ctx.stroke()

  // X - axis
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(canvasX * canvasScale, 0)
  ctx.strokeStyle = "black"
  ctx.lineWidth = 1
  ctx.stroke()

  // bezi curve
  ctx.beginPath()
  ctx.moveTo(sx1000, sy1000)
  ctx.bezierCurveTo(cp1x1000, cp1y1000, cp2x1000, cp2y1000, ex1000, ey1000)
  ctx.strokeStyle = "black"
  ctx.stroke()

  // start point
  ctx.beginPath()
  ctx.fillStyle = "red"
  ctx.arc(sx1000, sy1000, 10, 0, Math.PI * 2)
  ctx.fill()
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.fillText(`sp (${sx}, ${sy})`, sx1000 + 20, canvasY - sy1000 - 20)
  ctx.transform(1, 0, 0, -1, 0, canvasY)
  console.log(`sp (${sx}, ${sy})`)

  // end point
  ctx.beginPath()
  ctx.fillStyle = "purple"
  ctx.arc(ex1000, ey1000, 10, 0, Math.PI * 2)
  ctx.fill()
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.fillText(`ep (${ex}, ${ey})`, ex1000 - 50, canvasY - ey1000 + 30)
  ctx.transform(1, 0, 0, -1, 0, canvasY)
  console.log(`ep (${ex}, ${ey})`)

  // control point 1
  ctx.beginPath()
  ctx.fillStyle = "blue"
  ctx.arc(cp1x1000, cp1y1000, 10, 0, Math.PI * 2)
  ctx.fill()
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.fillText(`c1 (${cp1x}, ${cp1y})`, cp1x1000 - 20, canvasY - cp1y1000 + 30)
  ctx.transform(1, 0, 0, -1, 0, canvasY)
  console.log(`c1 (${cp1x}, ${cp1y})`)

  // control point 2
  ctx.beginPath()
  ctx.fillStyle = "green"
  ctx.arc(cp2x1000, cp2y1000, 10, 0, Math.PI * 2)
  ctx.fill()
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.fillText(`c2 (${cp2x}, ${cp2y})`, cp2x1000 - 20, canvasY - cp2y1000 - 20)
  ctx.transform(1, 0, 0, -1, 0, canvasY)
  console.log(`c2 (${cp2x}, ${cp2y})`)

  // start to control point 1
  ctx.beginPath()
  ctx.moveTo(sx1000, sy1000) // 시작점 설정
  ctx.lineTo(cp1x1000, cp1y1000) // 끝점 설정
  ctx.strokeStyle = "grey"
  ctx.lineWidth = 0.5
  ctx.stroke() // 그리기

  // start to control point 2
  ctx.beginPath()
  ctx.moveTo(ex1000, ey1000) // 시작점 설정
  ctx.lineTo(cp2x1000, cp2y1000) // 끝점 설정
  ctx.strokeStyle = "grey"
  ctx.lineWidth = 0.5
  ctx.stroke() // 그리기

  // coord
  var fontRatio = { fr1: 1 / 7, fr2: 2 / 7, fr3: 3 / 7, fr4: 4 / 7, fr5: 5 / 6, fr6: 7 / 7, fr7: 6 / 7 }

  var i = 1
  Object.keys(fontRatio).forEach(function (key) {
    fontRatio[key] = ex * (i / 7)
    i++
  })

  var coordValues = {}
  for (var t in fontRatio) {
    var coord = getBezierXY(fontRatio[t], sx1000, sy1000, cp1x1000, cp1y1000, cp2x1000, cp2y1000, ex1000, ey1000)
    coordValues[t] = coord.x
    ctx.beginPath()
    ctx.fillStyle = "orange"
    ctx.arc(0 + 2, coord.y, 5, 0, Math.PI * 2)
    ctx.fill()

    ctx.beginPath()
    ctx.fillStyle = "#FFF4BB"
    ctx.arc(coord.x, 0, 5, 0, Math.PI * 2)
    ctx.fill()
  }

  var fontScaleFactor = [
    parseFloat((coordValues.fr7 / coordValues.fr6).toFixed(2)),
    parseFloat((coordValues.fr6 / coordValues.fr5).toFixed(2)),
    parseFloat((coordValues.fr5 / coordValues.fr4).toFixed(2)),
    parseFloat((coordValues.fr4 / coordValues.fr3).toFixed(2)),
    parseFloat((coordValues.fr3 / coordValues.fr2).toFixed(2)),
    parseFloat((coordValues.fr2 / coordValues.fr1).toFixed(2)),
  ]

  // for (var t in coordValues) {
  //     if (t !== "fr1") {
  //         var prevKey = "fr" + (parseInt(t.slice(2)) - 1)
  //         fontScaleFactor[t] = parseFloat((coordValues[t] / coordValues[prevKey]).toFixed(2))
  //     }
  // }
  return fontScaleFactor
}

//FFF4BB
