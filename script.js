function compararNumeros() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if (num1 && num2) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if (num1 > num2) {
            alert(`${num1} es mayor que ${num2}`);
        } else if (num2 > num1) {
            alert(`${num2} es mayor que ${num1}`);
        } else {
            alert("Los dos números son iguales");
        }
    } else {
        alert("No se han introducido números");
    }
}