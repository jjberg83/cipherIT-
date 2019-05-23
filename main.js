// let button = document.querySelector('button');
// let textarea = document.querySelector('textarea');
//
// function changePara() {
//   let inputText = textarea.value;
//   inputText.replace(/e/g, '3');
//   console.log(inputText);
//   document.body.style.color = black;
// }
//
// button.addEventListener('click', changePara);

let btn = document.querySelector('button');
let txt = document.querySelector('p');

btn.onclick = function() {
  txt.textContent = 'Hello, I am still alive.';
};
