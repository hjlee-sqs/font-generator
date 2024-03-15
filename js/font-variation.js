function scaleFont() {
  // updateCanvas 함수 호출
  var fontSizes = updateCanvas()
  var rootSize = 10
  console.log(fontSizes)

  // HTML 태그 배열
  // var tags = ["h1", "h2", "h3", "h4", "p", "small"]

  // root 크기 (px)

  // 각 HTML 태그의 폰트 크기 설정

  var h1Elements = document.getElementsByTagName("h1")
  for (var i = 0; i < h1Elements.length; i++) {
    h1Elements[i].style.fontSize = fontSizes[0] * fontSizes[1] * fontSizes[2] * fontSizes[3] * fontSizes[4] * fontSizes[5] * rootSize + "px"
  }

  var h2Elements = document.getElementsByTagName("h2")
  for (var i = 0; i < h2Elements.length; i++) {
    h2Elements[i].style.fontSize = fontSizes[1] * fontSizes[2] * fontSizes[3] * fontSizes[4] * fontSizes[5] * rootSize + "px"
  }

  var h3Elements = document.getElementsByTagName("h3")
  for (var i = 0; i < h3Elements.length; i++) {
    h3Elements[i].style.fontSize = fontSizes[2] * fontSizes[3] * fontSizes[4] * fontSizes[5] * rootSize + "px"
  }

  var h4Elements = document.getElementsByTagName("h4")
  for (var i = 0; i < h4Elements.length; i++) {
    h4Elements[i].style.fontSize = fontSizes[3] * fontSizes[4] * fontSizes[5] * rootSize + "px"
  }

  var h4Elements = document.getElementsByTagName("h5")
  for (var i = 0; i < h4Elements.length; i++) {
    h4Elements[i].style.fontSize = fontSizes[3] * fontSizes[4] * fontSizes[5] * rootSize + "px"
  }

  var pElements = document.getElementsByTagName("p")
  for (var i = 0; i < pElements.length; i++) {
    pElements[i].style.fontSize = fontSizes[4] * fontSizes[5] * rootSize + "px"
  }

  var smallElements = document.getElementsByTagName("h6")
  for (var i = 0; i < smallElements.length; i++) {
    smallElements[i].style.fontSize = fontSizes[5] * rootSize + "px"
  }

  var smallElements = document.getElementsByTagName("small")
  for (var i = 0; i < smallElements.length; i++) {
    smallElements[i].style.fontSize = fontSizes[5] * rootSize + "px"
  }

  // document.getElementsByTagName("h1")[0].style.fontSize = fontSizes[1] * fontSizes[2] * fontSizes[3] * fontSizes[4] * rootSize + "px"
  // document.getElementsByTagName("h2")[0].style.fontSize = fontSizes[2] * fontSizes[3] * fontSizes[4] * rootSize + "px"
  // document.getElementsByTagName("h3")[0].style.fontSize = fontSizes[3] * fontSizes[4] * rootSize + "px"
  // document.getElementsByTagName("h4")[0].style.fontSize = fontSizes[4] * rootSize + "px"
  // document.getElementsByTagName("p")[0].style.fontSize = fontSizes[4] * rootSize * (14 / 16) + "px"
  // document.getElementsByTagName("small")[0].style.fontSize = rootSize * (fontSizes[4] / fontSizes[3]) + "px"
}
