var naipes=['♥', '♦', '♣', '♠'];
var faces=['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function sortear() {
    // Gerar valores randômicos toda vez que o botão for clicado
    var SorNaipe = naipes[Math.floor(Math.random() *4)];
    var SorFace = faces[Math.floor(Math.random() * faces.length)]; 

    // Obter referência à div onde a carta será exibida
    var faceCarta = document.querySelector('.face_carta');
    var naipeCarta = document.querySelector('.naipe_carta');

    // Verificar seo naipe recebe a cor vermelha
    if (SorNaipe === '♥' || SorNaipe === '♦') {
        naipeCarta.style.color = 'red';
        faceCarta.style.color = 'red';
    } else {
        naipeCarta.style.color = '';
        faceCarta.style.color = '';
    }

    // Atualizar o conteúdo da carta
    naipeCarta.textContent = SorNaipe;
    faceCarta.textContent = SorFace;
}
