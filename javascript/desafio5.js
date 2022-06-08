/* DESAFIO 05:
Dado um conjunto de números, retorne o inverso de cada um. Cada positivo torna-se negativo, e os negativos tornam-se positivos.*/

function inverteNumeros(array_original){
    let array_invertido=[];
    for (let i = 0; i<= array_original.length - 1; i++) {
        array_invertido[i] = array_original[i] * (-1);
    }
    return array_invertido;
}

let array_original = [1, -3, 5, 6, 8];
let array_invertido = inverteNumeros(array_original);
console.log(`array original: ${array_original} \narray invertido: ${array_invertido}`);