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
2 - Adicione a tag div com a classe main-content como filho da tag body;
*/
let mainContent = document.createElement('div');
mainContent.className = "main-content";

body.appendChild(mainContent);

/*
3 - Adicione a tag div com a classe center-content 
como filho da tag div criada no passo 2;
*/
let centerContent = document.createElement('div');
centerContent.className = "center-content";

mainContent.appendChild(centerContent);

/*
4 - Adicione a tag p como filho do div criado no passo 3 
e coloque algum texto;
*/
let firstParagraph = document.createElement('p');
firstParagraph.innerText = "Vivendo e aprendendo";

centerContent.appendChild(firstParagraph);

/* 
5 - Adicione a tag div com a classe left-content 
como filho da tag div criada no passo 2;
*/
let leftContent = document.createElement("div");
leftContent.className = "left-content";

mainContent.appendChild(leftContent);

/*
6 - Adicione a tag div com a classe right-content como filho
 da tag div criada no passo 2;
*/
let rightContent = document.createElement('div');
rightContent.className = "right-content";

mainContent.appendChild(rightContent);

/*
7 - Adicione uma imagem com src configurado para o valor 
https://picsum.photos/200 e classe small-image. Esse elemento 
deve ser filho do div criado no passo 5;
*/
let image = document.createElement("img");
image.className = 'small-image';
image.src = "https://picsum.photos/200";

leftContent.appendChild(image);

/*
8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso 
como valores da lista. Essa lista deve ser filha do div criado no passo 6;
 */
let lista = document.createElement('ul');

rightContent.appendChild(lista);

let numbers = ["um",'dois','três','quatro','cinco','seis','sete','oito','nove','dez']



for(let index = 0; index < numbers.length; index +=1){
    let num = numbers[index];
    let numList = document.createElement('li');
    numList.innerText = num;

    lista.appendChild(numList);
}

// 9 - Adicione 3 tags h3, todas sendo filhas do div criado no passo 2.

for(index = 0; index < 3; index +=1){
    let addh = document.createElement('h3');
   mainContent.appendChild(addh) ;
}

// parte 2
//1 - Adicione a classe title na tag h1 criada;
let tagh1 = document.querySelector('h1');
tagh1.className = 'title';

//2 - Adicione a classe description nas 3 tags h3 criadas;
for(let index = 0; index <= 2; index +=1){
    let descript = document.querySelectorAll('h3')[index];
    descript.className = 'description';
}

//3 - Remova o div criado no passo 5 (aquele que possui a classe 
//    left-content). Utilize a função .removeChild();

 mainContent.removeChild(leftContent);

//4 - Centralize o div criado no passo 6 (aquele que possui a classe 
//right-content). Dica: para centralizar, basta configurar o
//margin-right: auto do div;

rightContent.style.marginRight = 'auto';


//5 - Troque a cor de fundo do elemento pai da div criada 
//no passo 3 (aquela que possui a classe center-content) para a cor verde;

centerContent.parentElement.style.backgroundColor = 'rgb(200,100,150)';

//6 - Remova os dois últimos elementos (nove e dez) da lista 
//    criada no passo 8.
