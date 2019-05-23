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
let oldText = document.getElementById('oldOne');
let newText = document.getElementById('newOne');
let writtenText = document.getElementById('writtenOne')

btn.onclick = function() {
  newText.textContent = oldText.textContent.replace(/e/gi, 3);
};
