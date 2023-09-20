// pegando o html

const HTML = document.firstElementChild;

// pegando o head
const HEAD = HTML.firstElementChild;

// pegando o body
const BODY = HTML.lastElementChild;

// pegando o Main

const MAIN = BODY.firstElementChild;

// pegando o Header

const HEADER = MAIN.firstElementChild;

// pegando o H1

const H1 = HEADER.firstElementChild;

// pegando de forma mais rapido as imagens

const imagem = document.getElementById("imagem");

// alterando o src da imagem

imagem.src = ""

// alterando o style da imagem

imagem.style.width = "20em";

const IMAGEM = {
    id = "imagem",
    src: "https://br.vuejs.org/images/components.png",
    alt: "",
    srcset: "",
    style: {
        width: "20em"
    }
}


// Desafio

/* crie duas class no arquivo css
uma chamado .Hidden (tenha display: none;)
outra chamada .Show (tenha display: block;)

*/