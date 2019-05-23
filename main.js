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

function random(number) {
  return Math.floor(Math.random() * (number +1));
}

btn.onclick = function() {
  let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
};
