/*DESAFIO 06:
Dado a entrada de dois vetores some cada valor de um com o valor do outro.*/

function somaArray(primeiro_array, segundo_array){
    let arraySoma = [];
    for (let i = 0; i<= primeiro_array.length - 1; i++) {
        arraySoma[i] = primeiro_array[i] + segundo_array[i];
    }
    return arraySoma;
}

let primeiro_array = [1, 4, 5, 7, 3];
let segundo_array = [1, 4, 5, 7, 3];
let array_soma = somaArray(primeiro_array, segundo_array);
console.log(`a soma: [${primeiro_array}] + [${segundo_array}] = [${array_soma}]`);