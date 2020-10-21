"use strict";
console.log("Ready to JS");

// DECLARACIÓN VARIABLES
const buttonEl = document.querySelector(".js-button");
const inputEl = document.querySelector(".js-input");
const clueEl = document.querySelector(".js-clue__text");
const counttextEl = document.querySelector(".js-count__number");
const resetEl = document.querySelector(".js-reset");
let number = getRandomNumber(100);
let counter = 0;

//NÚMERO ALEATORIO
function getRandomNumber(max) {
  const num = Math.ceil(Math.random() * max);
  console.log(`El número aleatorio es ${num}`);
  return num;
}

//COMPARE NUMS

const comparesNum = (num) => {
  let message = "";

  //comparación con num
  const dif = Math.abs(num - number);

  if (num > 100 || num <= 0) {
    message = "El número debe estar entre 1 y 100";
  } else if (dif > number / 2 && num < number) {
    message = "El número es demasiado bajo";
  } else if (dif > number / 2 && dif > number / 4 && num > number) {
    message = "El número es demasiado alto";
  } else if (dif < number / 2 && dif > number / 4 && num < number) {
    message = "Estás cerca pero es bajo";
  } else if (dif < number / 2 && dif > number / 4 && num > number) {
    message = "Estás cerca pero es alto";
  } else if (dif < number / 4 && num < number) {
    message = "Estás muy cerca pero es bajo";
  } else if (dif < number / 4 && num > number) {
    message = "Estás muy cerca pero es alto";
  } else if (num === number) {
    message = "Has ganado campeona!!!";
  }

  //actualización de la página: clue y counter.
  clueEl.innerHTML = `Pista: ${message}`;
  counttextEl.innerHTML = `Número de intentos: ${counter}`;
};

//INCREMENTAR CONTADOR
const counterUP = () => counter++;

//AL CLICKAR...

const handleClick = (event) => {
  // console.log(event.currentTarget);
  const mynumber = parseInt(inputEl.value);
  comparesNum(mynumber);
  counterUP();
};

function handleReset() {
  number = getRandomNumber(100);
  counter = 0;
  counttextEl.innerHTML = `Número de intentos: ${counter}`;
  clueEl.innerHTML = "Pista: Dime otro número entonces";
  inputEl.value = "";
}

//LISTENER DEL BOTÓN
buttonEl.addEventListener("click", handleClick);
resetEl.addEventListener("click", handleReset);
