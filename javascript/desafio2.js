/* DESAFIO 02:
Dado uma entrada de uma string, inverta essa string.*/

function inverteString(string_entrada) {
    let string_invertida = "";
    for (let i = string_entrada.length - 1; i >= 0; i--) {
        string_invertida += string_entrada[i];
    }
    return string_invertida;
}
let string_entrada = 'world';
let str_invertida = inverteString(string_entrada);
console.log(`Entrada: ${string_entrada}\nSaída: ${str_invertida}`);
