function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // 1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let dayslist = document.querySelector("#days");

  for(let index = 0; index < dezDaysList.length; index+=1){
      if(dezDaysList[index] === 24 || dezDaysList[index] === 31){
        let dias = dezDaysList[index];
        let createLi = document.createElement('li');
        createLi.className = 'days holiday';
        createLi.innerText = dias
  
        dayslist.appendChild(createLi);
      }
      else if(dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18    ) {
        let dias = dezDaysList[index];
        let createLi = document.createElement('li');
        createLi.className = 'days friday';
        createLi.innerText = dias
  
        dayslist.appendChild(createLi);
      }
      else if(dezDaysList[index] === 25 ){
        let dias = dezDaysList[index];
        let createLi = document.createElement('li');
        createLi.className = 'days friday holiday';
        createLi.innerText = dias
  
        dayslist.appendChild(createLi);
      }
      else{
        let dias = dezDaysList[index];
        let createLi = document.createElement('li');
        createLi.className = 'days';
        createLi.innerText = dias
  
        dayslist.appendChild(createLi);
      }
  }



  //2
  function createButton(buttonName){
      let createButton = document.createElement('button');
      createButton.innerText = buttonName;
      createButton.id = "btn-holiday";

      let container = document.getElementsByClassName('buttons-container')[0];
      container.appendChild(createButton)
  }
  createButton("feriados");

  //3
  let button = document.querySelector('#btn-holiday');
  let allDays = document.getElementsByClassName('days');

  button.addEventListener('click',function(){
    for(let i in allDays){
    if(allDays[i].className.includes('holiday')){
        if(allDays[i].style.backgroundColor == 'red'||allDays[i].style.backgroundColor == 'blue'){
            allDays[i].style.backgroundColor = 'rgb(238,238,238)'
        }
        else{allDays[i].style.backgroundColor = 'red'}
    }
}})
  
//4
function createButtonFriday(buttonName){
    let createButton = document.createElement('button');
    createButton.innerText = buttonName;
    createButton.id = "btn-friday";

    let container = document.getElementsByClassName('buttons-container')[0];

    container.appendChild(createButton)
}
createButtonFriday("friday");

//5
let fridayButton = document.getElementById('btn-friday');


fridayButton.addEventListener('click',function(){
    for(let i in allDays){
    if(allDays[i].className.includes('friday')){
        if(allDays[i].innerHTML == "SEXTOU"){
            allDays[i].innerHTML = dezDaysList[i]
        }
        else{allDays[i].innerHTML = "SEXTOU";}
    }
}})