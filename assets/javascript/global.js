//////////////////////////////////////
//  # Copyright © - 2° ano de T.I;
//  # Type: .js;
//////////////////////////////////////




// util's

getInsertDate = function(type){
    return document.querySelector(type).innerText = new Date().getFullYear();
};

// callback

getInsertDate('#date');

// book's

const k = [
    {
        id: 1, // 0+1
        text: '<span>Alan Mathison Turing</span> (23 de junho de <span>1912</span> – 7 de junho de <span>1954</span>) foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico. Turing foi altamente influente no desenvolvimento da ciência da computação teórica, proporcionando uma formalização dos conceitos de algoritmo e computação com a máquina de Turing, que pode ser considerada um modelo de um computador de uso geral. Ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial. Apesar dessas realizações ele nunca foi totalmente reconhecido em seu país de origem durante sua vida por ser homossexual e porque grande parte de seu trabalho foi coberto pela Lei de Segredos Oficiais.', // texto
        title: 'O Pai da Ciência da Computação Teórica',
        img: 'https://s2.glbimg.com/3auOxS3cG2mc_H5jFXDpxC7ol-w=/e.glbimg.com/og/ed/f/original/2016/09/12/dr-alan-turing-2956483.jpg',
        element: '.intro-obrs', // não mexer
        class: '', // true - false
        type: 'left' // esquerda
    },

    {
        id: 2, // 1+1
        text: 'Em 19 de Fevereiro de <span>1946</span>, <span>Turing</span> apresentou um relatório ao Comitê Executivo do National Physical Laboratory (NPL), onde detalhava o primeiro desenho completo de um computador de programa armazenado. Diferentemente da maioria das máquinas pioneiras, não tinha nada que ver com o EDVAC, mas era um projeto completamente independente, contemporâneo ao EDVAC. O ACE tinha uma palavra de 48-bits. Utilizava memória tipo delay line, e continha cerca de 7000 válvulas. Levava cerca de 448 microssegundos para fazer uma multiplicação. Devido a várias dificuldades, a primeira versão realmente construída do ACE foi a Pilot ACE, uma implementação menor do projeto original de Turing. A versão completa só foi construída mais tarde, em fins dos anos 1950 e ficou operacional em 1957, mas já estava praticamente obsoleta devido ao uso de delay line como memória principal.', // texto
        title: 'O Primeiro Computador', // titulo
        img: 'https://files.tecnoblog.net/wp-content/uploads/2019/01/TuringBombe-700x475.jpg', // imagem
        class: '', // true - false
        element: '.intro-obrs', // não mexer
        type: 'right' // direita
    },

    {
        id: 3, // 2+1
        text: '<span>Augusta Ada Byron King</span>, Condessa de Lovelace (nascida Byron, 10 de dezembro de <span>1815</span> — 27 de novembro de <span>1852</span>), atualmente conhecida como Ada Lovelace, foi uma matemática e escritora inglesa. Hoje é reconhecida principalmente por ter escrito o primeiro algoritmo para ser processado por uma máquina, a máquina analítica de Charles Babbage. Durante o período em que esteve envolvida com o projeto de Babbage, ela desenvolveu os algoritmos que permitiriam à máquina computar os valores de funções matemáticas, além de publicar uma coleção de notas sobre a máquina analítica. Por esse trabalho é considerada a primeira programadora de toda a história.', // texto
        title: 'O Primeiro Algoritmo', // titulo
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ada_lovelace.jpg/200px-Ada_lovelace.jpg', // imagem
        class: 'ada', // true - false
        element: '.intro-obrs', // não mexer
        type: 'left' // esquerda
    },

    {
        id: 4, // 3+1
        text: '<span>Rasmus Lerdorf</span> (Qeqertarsuaq, 22 de novembro de <span>1968</span>) é um programador canadiano-dinamarquês. Ele é o autor da primeira versão da linguagem de programação PHP. Rasmus foi co-autor das versões seguintes do PHP, juntamente com os israelitas fundadores da Zend Technologies, Andi Gutmans e Zeev Suraski. Trabalhou de Setembro de 2002 a novembro de 2009 para a Yahoo!. Em 2012 anunciou no Twitter que iria começar a trabalhar na Etsy.', // texto
        title: 'Primeira Versão do PHP', // titulo
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Rasmus_Lerdorf_August_2014_%28cropped%29.JPG/220px-Rasmus_Lerdorf_August_2014_%28cropped%29.JPG', // imagem
        class: '', // true - false
        element: '.intro-obrs', // não mexer
        type: 'right' // direita
    },
];

// active function

document.querySelectorAll('.navbar-item a').forEach(isActive => {
    isActive.addEventListener('click', function(){
        document.querySelector('.navbar-menu').querySelector('.active').classList.remove('active')
        isActive.classList.add('active')
    })
});

// click navbar

document.querySelector('#mobile-menu').addEventListener('click',
    () => {
        document.querySelector('#mobile-menu').classList.toggle('is-active')
        document.querySelector('.navbar-menu').classList.toggle('active')
    }
);

// for

var i;
for(i = 0; i <= k.length; i++){
    insertInToDiv(k[i]['text'], k[i]['title'], k[i]['img'], k[i]['class'], k[i]['element'], k[i]['type']);
};

// function generate

function insertInToDiv(text, title, img, bol, element, type){
    var text = ((text === '') ? false : text);
    var img = ((img === '') ? false : img);
    var title = ((title === '') ? false : title);
    var element = ((element === '') ? false : element);
    if (text && img && title && element && type){
        if(type == 'left'){
            document.querySelector(`${element}`).insertAdjacentHTML(
                'beforeend',
                `
                <div class='intro-obrs-container'>
                    <div class='intro-obrs-tittle'>
                        <span>${title}</span>
                    </div>
                    <div class='intro-obrs-content'>
                        <img class='${bol}' src='${img}' alt='Imagem - ${title}' />
                        <p>${text}</p>
                    </div>
                </div>
                `
            );
        }else if(type == 'right'){
            document.querySelector(`${element}`).insertAdjacentHTML(
                'beforeend',
                `
                <div class='intro-obrs-container'>
                    <div class='intro-obrs-tittle'>
                        <span>${title}</span>
                    </div>
                    <div class='intro-obrs-content'>
                        <p>${text}</p>
                        <img class='${bol}' src='${img}' alt='Imagem - ${title}' />
                    </div>
                </div>
                `
            );
        }else{
            document.querySelector(`${element}`).insertAdjacentHTML(
                'beforeend',
                `
                <div class='intro-obrs-container'>
                    <div class='intro-obrs-tittle'>
                        <span>${title}</span>
                    </div>
                    <div class='intro-obrs-content'>
                        <img class='${bol}' src='${img}' alt='Imagem - ${title}' />
                        <p>${text}</p>
                    </div>
                </div>
                `
            );
        };
    }else{
        console.log('Syntax incorreta: insertInToDiv(text, title, img, element, type);')
    };
};