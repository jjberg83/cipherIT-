let btnCipher = document.getElementById('cipherIT');
let btnUnCipher = document.getElementById('unCipher');
let oldText = document.getElementById('oldOne');
let newText = document.getElementById('newOne');
let writtenText = document.querySelector('textarea');

btnCipher.onclick = function() {
  let inputText = writtenText.value;
  newText.textContent = inputText.replace(/e/gi, '>')
                                 .replace(/a/gi, '""')
                                 .replace(/r/gi, '#')
                                 .replace(/i/gi, '$')
                                 .replace(/o/gi, '%')
                                 .replace(/t/gi, '<')
                                 .replace(/n/gi, '/')
                                 .replace(/s/gi, '(')
                                 .replace(/l/gi, ')')
                                 .replace(/c/gi, '=')
                                 .replace(/u/gi, '§')
                                 .replace(/d/gi, '€')
                                 .replace(/p/gi, '+')
                                 .replace(/m/gi, ';')
                                 .replace(/h/gi, ':')
                                 .replace(/g/gi, '_1')
                                 .replace(/b/gi, '_2')
                                 .replace(/f/gi, '_3')
                                 .replace(/y/gi, '_4')
                                 .replace(/w/gi, '_5')
                                 .replace(/k/gi, '_6')
                                 .replace(/v/gi, '_7')
                                 .replace(/x/gi, '_8')
                                 .replace(/z/gi, '_9')
                                 .replace(/j/gi, '_0')
                                 .replace(/q/gi, '_@')
                                 .replace(/ /gi, '*');
}

btnUnCipher.onclick = function() {
  let inputText = writtenText.value;
  newText.textContent = inputText.replace(/>/gi, 'e')
                                 .replace(/""/gi, 'a')
                                 .replace(/#/gi, 'r')
                                 .replace(/\$/gi, 'i')
                                 .replace(/%/gi, 'o')
                                 .replace(/</gi, 't')
                                 .replace(/\//gi, 'n')
                                 .replace(/\(/gi, 's')
                                 .replace(/\)/gi, 'l')
                                 .replace(/=/gi, 'c')
                                 .replace(/§/gi, 'u')
                                 .replace(/€/gi, 'd')
                                 .replace(/\+/gi, 'p')
                                 .replace(/;/gi, 'm')
                                 .replace(/:/gi, 'h')
                                 .replace(/_1/gi, 'g')
                                 .replace(/_2/gi, 'b')
                                 .replace(/_3/gi, 'f')
                                 .replace(/_4/gi, 'y')
                                 .replace(/_5/gi, 'w')
                                 .replace(/_6/gi, 'k')
                                 .replace(/_7/gi, 'v')
                                 .replace(/_8/gi, 'x')
                                 .replace(/_9/gi, 'z')
                                 .replace(/_0/gi, 'j')
                                 .replace(/_@/gi, 'q')
                                 .replace(/\*/gi, ' ');
}
//0!1 p!&!# 0ø#?/€ 0!/((!/ 2!#1
//0!1 :!&!# 0ø#?/€ 0!/((!/ 2!#1
//jeg heter jørund jenssen berg
