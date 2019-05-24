let btn = document.querySelector('button');
let oldText = document.getElementById('oldOne');
let newText = document.getElementById('newOne');
let writtenText = document.getElementById('writtenOne')

btn.onclick = function() {
  let inputText = writtenText.value;
  newText.textContent = inputText.replace(/e/gi, 3);
};

// var replaceChars={ "#":"" , "_":" " };
// string.replace(/#|_/g,function(match) {return replaceChars[match];})
