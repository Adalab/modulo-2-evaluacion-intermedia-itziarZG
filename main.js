'use strict';
console.log("Ready to JS");

// DECLARACIÓN VARIABLES
const buttonEl = document.querySelector('.js-button');
const inputEl = document.querySelector('.js-input');
const clueEl = document.querySelector('.js-clue__text');
const counttextEl = document.querySelector('.js-count__number');
const number = getRandomNumber(100);
let counter = 0;

//NÚMERO ALEATORIO
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
  }

  console.log(`El número aleatorio es ${number}`);

  //AL CLICKAR... 

const handleClick = (event) =>{
  // console.log(event.currentTarget);
  const mynumber = parseInt(inputEl.value);
  let message = '';

 
  //comparación mynumber
  if(mynumber>100 || mynumber<0){
    message='El número debe estar entre 1 y 100';
   }else if(mynumber>number){
    message='El número es demasiado alto';
    counter++;
  }else if(mynumber<number){
    message='El número es demasiado bajo';
    counter++;
  }else if(mynumber===number){
    message='Has ganado campeona!!!';
  }

  //actualización de la página: clue y counter.
  clueEl.innerHTML = (`Pista: ${message}`);
  counttextEl.innerHTML = (`Número de intentos: ${counter}`);
}

  //LISTENER DEL BOTÓN
  buttonEl.addEventListener('click',handleClick);