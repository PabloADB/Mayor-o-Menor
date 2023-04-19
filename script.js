function compararNumeros() {
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);
  
    let mensaje;
    if (numero1 > numero2) {
      mensaje = "El primer número es mayor";
    } else if (numero1 < numero2) {
      mensaje = "El segundo número es mayor.";
    } else {
      mensaje = "Los dos números son iguales.";
    }
    
    alert(mensaje);
  }