let btnCipher = document.getElementById('cipherIT');
let btnUnCipher = document.getElementById('unCipher');
let oldText = document.getElementById('oldOne');
let newText = document.getElementById('newOne');
let writtenText = document.querySelector('textarea');

btnCipher.onclick = function() {
  let inputText = writtenText.value;
  newText.textContent = inputText.replace(/e/gi, '!')
                                 .replace(/a/gi, '""')
                                 .replace(/r/gi, '#')
                                 .replace(/i/gi, '$')
                                 .replace(/o/gi, '%')
                                 .replace(/t/gi, '&')
                                 .replace(/n/gi, '/')
                                 .replace(/s/gi, '(')
                                 .replace(/l/gi, ')')
                                 .replace(/c/gi, '=')
                                 .replace(/u/gi, '?')
                                 .replace(/d/gi, '€')
                                 .replace(/p/gi, '+')
                                 .replace(/m/gi, ';')
                                 .replace(/h/gi, ':')
                                 .replace(/g/gi, 1)
                                 .replace(/b/gi, 2)
                                 .replace(/f/gi, 3)
                                 .replace(/y/gi, 4)
                                 .replace(/w/gi, 5)
                                 .replace(/k/gi, 6)
                                 .replace(/v/gi, 7)
                                 .replace(/x/gi, 8)
                                 .replace(/z/gi, 9)
                                 .replace(/j/gi, 0)
                                 .replace(/q/gi, '@');
}

btnUnCipher.onclick = function() {
  let inputText = writtenText.value;
  newText.textContent = inputText.replace(/!/gi, 'e')
                                 .replace(/""/gi, 'a')
                                 .replace(/#/gi, 'r')
                                 .replace(/\$/gi, 'i')
                                 .replace(/%/gi, 'o')
                                 .replace(/&/gi, 't')
                                 .replace(/\//gi, 'n')
                                 .replace(/\(/gi, 's')
                                 .replace(/\)/gi, 'l')
                                 .replace(/=/gi, 'c')
                                 .replace(/\?/gi, 'u')
                                 .replace(/€/gi, 'd')
                                 .replace(/\+/gi, 'p')
                                 .replace(/;/gi, 'm')
                                 .replace(/:/gi, 'h')
                                 .replace(/1/gi, 'g')
                                 .replace(/2/gi, 'b')
                                 .replace(/3/gi, 'f')
                                 .replace(/4/gi, 'y')
                                 .replace(/5/gi, 'w')
                                 .replace(/6/gi, 'k')
                                 .replace(/7/gi, 'v')
                                 .replace(/8/gi, 'x')
                                 .replace(/9/gi, 'z')
                                 .replace(/0/gi, 'j')
                                 .replace(/@/gi, 'q');
}
//0!1 p!&!# 0ø#?/€ 0!/((!/ 2!#1
//jeg heter jørund jenssen berg
