let order = [];
let clickedOrder = [];
let score = 0;

/* 
0 = verde
1 = vermelho
2 = amarelo
3 =  azul
 */

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4); //floor arredonda o numero
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order){
        let elementColor = createElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number -250);
    setTimeout(() => {
        element.classList.remove('selected');
    })
}

//checa s o0s botoes clicados sao os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if (clickedOrder[i] != order[i]){
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    elementColor(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
    })
    
    checkOrder();
}