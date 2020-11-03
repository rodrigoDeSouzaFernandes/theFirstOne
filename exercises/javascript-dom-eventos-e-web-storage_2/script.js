/*
1 - Adicione a tag h1 com o texto 
Exercício 5.2 - JavaScript DOM como filho da tag body;
*/
let titleText = "Exercício 5.2 - JavaScript DOM ";

let body = document.querySelector('body');

let text = document.createElement('h1');
text.innerText = titleText;

body.appendChild(text);

/*
2 -Adicione a tag div com a classe main-content como filho da tag body;
*/
let mainContent = document.createElement('div');
mainContent.getElementsByClassName = "main-content";

body.appendChild(mainContent);

/*
3 -Adicione a tag div com a classe center-content 
como filho da tag div criada no passo 2;
*/
