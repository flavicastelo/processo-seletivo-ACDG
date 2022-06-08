/* DESAFIO 04:
Breno está no primeiro semestre de computação, e ele está aflito se irá conseguir passar na materia de algoritimos. Então ele decidiu fazer uma pequena função que irá calcular suas notas e dizer se ele foi aprovado ou não, e se ele precisará fazer a terceira prova, já que em sua universidaden se um aluno tiver uma media aritimetica das duas primeiras notas maior que 8, ele não precisa fazer a terceira prova. Breno então foi na coordenação do curso e pegou os criterios de aprovação para todos os casos. Ajude o Breno a fazer uma função que receba como parametro de entrada um vetor com as 2 notas de 0…10 e saia uma string dizendo se ele foi aprovado ou não, e caso ele vá para a prova final, qual a nota que ele precisará para poder ser aprovado na materia.*/

function calcularMedia(notas_obtidas){
  
    let media_regular = (notas_obtidas[0] + notas_obtidas[1]) / 2;

    if ( media_regular > 8 ){
        console.log(`Sua média foi: ${media_regular}. Você já está aprovado, não precisa fazer a Avaliação Final (AF)!`);
    } else if ( media_regular >= 4 && media_regular < 8){
        let AF = (5*2)-media_regular;
        console.log(`Sua média foi: ${media_regular}. Você precisará fazer a Avaliação Final e precisará tirar no mínimo ${AF}`);
    } else 
        console.log(`Sua média foi: ${media_regular}. Você está reprovado!`);
    
}

let notas_obtidas = [8, 6];
calcularMedia(notas_obtidas);