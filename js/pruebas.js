function creaFichas() {
  var puzle = document.getElementById("puzle");
  var sizePuzle = 450;
  var tipoPuzle = 4;
  var sizeFichas = sizePuzle / tipoPuzle;
  for (let i = 0; i < tipoPuzle * tipoPuzle; i++) {
    var ficha = document.createElement("div");
    ficha.setAttribute(
      "style",
      "width: " +
        sizeFichas +
        "px; height: " +
        sizeFichas +
        "px; border: 1px solid black; position: absolute"
    );
    puzle.appendChild(ficha);
  }
}
