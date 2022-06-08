/* DESAFIO 01:
  Implemente uma função que converta o valor booleano fornecido, para uma saida em string com o mesmo valor.
 */

function converteBooleano(bool_entrada){
    let booleano =  Boolean(bool_entrada);
    let string_saida = booleano.toString(); 
    return `${string_saida}: tipo ${typeof string_saida}`;
}

let str_saida = converteBooleano(true);
console.log(str_saida);