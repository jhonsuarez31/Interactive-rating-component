const forma = document.forms["forma"];
let seleccion;
let text = "";

function selec() {
  for (let index = 0; index < forma.length; index++) {
    if (forma[index].checked) seleccion = forma[index];
  }
  if (seleccion !== undefined) {
    document.getElementById("thanks").style.display = "block";
    document.getElementById("card-principal").style.display = "none";

    text += `You selected  ${seleccion.value}  out of 5`;

    document.getElementById("section-informacion").innerHTML = text;
  } else {
    alert("Seleccione una de las opciones");
  }
}
