function encriptar() {
  
  var leer = document.getElementById("textoingresa").value;
  /*let arr = leer.split('');
  let resultado = [];

  const a = leer
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat")
    .replaceAll("a", "ai");*/

    let vocales = ['a', 'e', 'i', 'o', 'u'];
    let resultado = leer.split('').map(function(letra) {
      if (vocales.includes(letra)) {
        switch (letra) {
          case 'a':
            return 'ai';
          case 'e':
            return 'enter';
          case 'i':
            return 'imes';
          case 'o':
            return 'ober';
          case 'u':
            return 'ufat';
        }
      } else {
        return letra;
      }
    });

  document.getElementById("textosale").innerHTML = resultado.join('');







}

function desencriptar() {
  var leer = document.getElementById("textoingresa").value;
  const a = leer
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u")
    .replaceAll("ai", "a");

  document.getElementById("textosale").innerHTML = a;
}
