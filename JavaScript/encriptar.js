/*
La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
const txtArea = document.querySelector("textarea");
const txtRectangulo = document.getElementById("rectText");

function encriptarTexto(){
  const texto = txtArea.value;
  const arrayTexto = texto.split("");
  const arrayVocales = ["a", "e", "i", "o", "u"];


  for (let indiceTxt = 0; indiceTxt < arrayTexto.length; indiceTxt++) {
      if(arrayTexto[indiceTxt] == arrayVocales[0]){
        arrayTexto[indiceTxt] = arrayTexto[indiceTxt] + "i";
      } else if (arrayTexto[indiceTxt] == arrayVocales[1]) {
        arrayTexto[indiceTxt] = arrayTexto[indiceTxt] + "nter";
      } else if(arrayTexto[indiceTxt] == arrayVocales[2]){
        arrayTexto[indiceTxt] = arrayTexto[indiceTxt] + "mes";
      } else if(arrayTexto[indiceTxt] == arrayVocales[3]){
        arrayTexto[indiceTxt] = arrayTexto[indiceTxt] + "ber";
      } else if(arrayTexto[indiceTxt] == arrayVocales[4]){
        arrayTexto[indiceTxt] = arrayTexto[indiceTxt] + "fat";
      }
  }
  let encriptado = arrayTexto.join("");
  txtRectangulo.innerHTML = encriptado;
  txtArea.value = "";

  const botonCopiar = document.getElementById("boton-copiar");
  botonCopiar.style.display = 'block';


	botonCopiar.addEventListener("click", () => {

    /*// Seleccionar el texto en el elemento txtRectangulo
    const seleccion = window.getSelection();
    const rango = document.createRange();
    rango.selectNodeContents(txtRectangulo);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);
  
    // Copiar el texto seleccionado al portapapeles
    document.execCommand("copy");
  
    // Deseleccionar el texto
    seleccion.removeAllRanges();
    });*/

    const seleccion = window.getSelection();
    const rango = document.createRange();
    rango.selectNodeContents(txtRectangulo);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);
    
    // Copiar el texto seleccionado al portapapeles
    navigator.clipboard.writeText(encriptado);
    
    // Deseleccionar el texto
    seleccion.removeAllRanges();
  });
}

function desencriptarTexto(){
  const texto = txtArea.value;
  const arrayTexto = texto.split(" ");

  for (let indiceTxt = 0; indiceTxt < arrayTexto.length; indiceTxt++) {
    if(arrayTexto[indiceTxt].indexOf("ai") !== -1){
      arrayTexto[indiceTxt] = arrayTexto[indiceTxt].replace(/ai/g, "a");
    }
    if (arrayTexto[indiceTxt].indexOf("enter") !== -1) {
      arrayTexto[indiceTxt] = arrayTexto[indiceTxt].replace(/enter/g, "e");
    }
    if(arrayTexto[indiceTxt].indexOf("imes") !== -1){
      arrayTexto[indiceTxt] = arrayTexto[indiceTxt].replace(/imes/g, "i");
    }
    if(arrayTexto[indiceTxt].indexOf("ober") !== -1){
      arrayTexto[indiceTxt] = arrayTexto[indiceTxt].replace(/ober/g, "o");
    }
    if(arrayTexto[indiceTxt].indexOf("ufat") !== -1){
      arrayTexto[indiceTxt] = arrayTexto[indiceTxt].replace(/ufat/g, "u");
    }
  }
  
  let desencriptado = arrayTexto.join(" ");
  txtRectangulo.innerHTML = desencriptado;
  txtArea.value = "";

  const botonCopiar = document.getElementById("boton-copiar");
  botonCopiar.style.display = 'block';


	botonCopiar.addEventListener("click", () => {

    const seleccion = window.getSelection();
    const rango = document.createRange();
    rango.selectNodeContents(txtRectangulo);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);
    
    // Copiar el texto seleccionado al portapapeles
    navigator.clipboard.writeText(desencriptado);
    
    // Deseleccionar el texto
    seleccion.removeAllRanges();
  });
}