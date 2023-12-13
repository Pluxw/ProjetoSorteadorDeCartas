const naipes = ["Copas", "Espadas", "Ouros", "Paus"];
const nomes = ["Ás", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Valete", "Dama", "Rei"];
const coringa = { naipe: "Coringa", nome:"Coringa" };

function criarBaralho() {
    const baralho = [];

    for (const naipe of naipes) {
        for (const nome of nomes) {
            const carta = {
                naipe: naipe,
                nome: nome
            };
            baralho.push(carta);
        }
    }

    // Adiciona o coringa ao baralho
    baralho.push(coringa);

    return baralho;
}

function embaralharCartas(baralho) {
    for (let i = baralho.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [baralho[i], baralho[j]] = [baralho[j], baralho[i]];
    }
}

function sortearCarta() {
    const cartaSorteada = baralho.shift(); // Retira a primeira carta do baralho
    exibirCarta(cartaSorteada);
}

function exibirCarta(carta) {
    const suitElement = document.getElementById("suit");
    const nameElement = document.getElementById("name");
    const cardImageElement = document.getElementById("cardImage");
    const additionalTextElement = document.getElementById("additionalText");

    if (carta.naipe === "Coringa") {
        // Tratamento especial para o coringa
        suitElement.textContent = "Coringa";
        nameElement.textContent = "Coringa Especial";
        cardImageElement.src = "caminho/para/imagem/coringa.jpg"; // Substitua com o caminho real
        additionalTextElement.textContent = "Uma mensagem especial para o coringa!";
    } else {
        // Tratamento padrão para outras cartas
        suitElement.textContent = carta.naipe;
        nameElement.textContent = carta.nome;
        cardImageElement.src = `imagens/${carta.naipe}_${carta.nome}.jpg`; // Substitua com o padrão de nomenclatura das imagens
        additionalTextElement.textContent = "";
    }

    // Defina a lógica para exibir a imagem da carta (quando estiver pronto)
    cardImageElement.src = ""; // Substitua com o caminho da sua imagem

    // Defina a lógica para o texto adicional, pode ser vazio se não houver texto
    additionalTextElement.textContent = "";

    // Se desejar adicionar texto adicional de forma condicional

    // additionalTextElement.textContent = "Texto Adicional";

    // Outras ações de exibição que você possa precisar fazer
}

// Inicialização do baralho
const baralho = criarBaralho();

// Embaralhar as cartas
embaralharCartas(baralho);

// Exemplo de chamada em resposta a um clique de botão
const botaoSortear = document.getElementById("seuBotaoId");
botaoSortear.addEventListener("click", sortearCarta);
