/* DESAFIO 03:
Um herói está a caminho do castelo para completar sua missão. No entanto, ele foi informado de que o castelo está cercado por alguns dragões poderosos! cada dragão leva 2 balas para ser derrotado, nosso herói não tem ideia de quantas balas ele deve carregar. Supondo que ele vai pegar um determinado número de balas e avançar para lutar contra outro determinado número de dragões, ele sobreviverá?
O retorno será em strig, informando o numero de balas que restou, a quantidade de dragões que foram abatidos e se ele irá sobreviver.
*/

function matarDragoes(balas, dragoes) {
    if (balas >= dragoes *2){
        console.log(`Restaram ${Math.abs(balas-(dragoes*2))}balas \nForam abatidos ${dragoes} dragões \nO herói sobreviveu!`);
    } else 
    console.log(`Faltaram ${Math.abs(balas-(dragoes*2))} balas \nForam abatidos ${parseInt(balas/2)} dragões\nO herói não sobreviveu!`);
}

matarDragoes(15, 10);

