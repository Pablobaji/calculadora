// function suma(a,b,c) {
//     return console.log(a,b,c)
// }
// const numero = [5,6,7]
// let resultado = suma(...numero);
// console.log(resulado);

// let hola = function () { 
//     console.log('Hola mundo');
// }

//fuction arrow
// let saludar = (nombre) => console.log('Hola '+ nombre+' desde una variable arrow')
// saludar('Pablo')

function suma() {
    let nm1 = parseFloat(document.getElementById('num1').value);
    let nm2 = parseFloat(document.getElementById('num1').value);
    let suma = nm1 + nm2 ;
    document.write('El resultado es = '+suma);
}
function resta() {
    let nm1 = parseFloat(document.getElementById('num1').value);
    let nm2 = parseFloat(document.getElementById('num1').value);
    let suma = nm1 - nm2 ;
    document.write('El resultado es = '+suma);
}
function multiplicacion() {
    let nm1 = parseFloat(document.getElementById('num1').value);
    let nm2 = parseFloat(document.getElementById('num1').value);
    let suma = nm1 * nm2 ;
    document.write('El resultado es = '+suma);
}
function divicion() {
    let nm1 = parseFloat(document.getElementById('num1').value);
    let nm2 = parseFloat(document.getElementById('num1').value);
    let suma = nm1 / nm2 ;
    document.write('El resultado es = '+suma);
}
// for (let index = 1; index < 6; index++) {
//     if (index==3) {
//     continue;
//     }
//     debugger;
//     console.log('Termino el ciclo')
// }
