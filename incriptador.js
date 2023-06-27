const textoArea = document.querySelector(".textoArea");
const mensaje = document.querySelector(".textoResultado");
const botonEncriptar = document.querySelector(".btn-Encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const botonCopiar = document.querySelector(".copiar");
const muñeco = document.querySelector(".muñeco");
const contenedordesencriptado = document.querySelector(".contenedordesencriptado");

botonEncriptar.addEventListener("click", btnEncriptar);

function btnEncriptar() {
  const textoEncriptado = encriptar(textoArea.value);
  mensaje.textContent = textoEncriptado;
  textoArea.value = "";
  ocultarElementos();
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncriptada;
}

function ocultarElementos() {
  muñeco.style.display = "none";
  contenedordesencriptado.style.display = "none";
}

botonDesencriptar.addEventListener("click", btnDesencriptar);

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textoArea.value);
  mensaje.textContent = textoDesencriptado;
  textoArea.value = "";
}

function desencriptar(stringDesencriptar) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringDesencriptar = stringDesencriptar.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptar.includes(matrizCodigo[i][1])) {
      stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return stringDesencriptar;
}

function copiarTexto() {
  const textoCopiar = mensaje.textContent;
  navigator.clipboard.writeText(textoCopiar)
    .then(() => {
      console.log("Texto copiado al portapapeles: " + textoCopiar);
    })
    .catch((error) => {
      console.error("Error al copiar el texto: ", error);
    });
}

botonCopiar.addEventListener("click", copiarTexto);
