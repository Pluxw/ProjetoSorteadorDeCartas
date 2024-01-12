/**
 * Primeiro passo: criar duas variáveis uma para os quatro naipes, outra para os números e figuras - valete damas, rei e coringa
 */

var naipes=['♥', '♦', '♣', '♠'];
var faces=['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

/**
 * Segundo passo: criar os dois valores randômicos um para os naipes - que são quatro situações possíveis; e o outro para as faces, mas aqui vamos usar o .lenght para que todas as situações do vetor sejam usadas não importando o tamanho do vetor.
 * 
 */
var SorNaipe=naipes[Math.floor(Math.random() *4)];
var SorFace=faces[Math.floor(Math.random() * faces.length)];

/**
 * Terceiro passo: agora vamos exibir o resultado na tela
 */

document.write("<h1>" + SorFace + SorNaipe + "</h1>");
