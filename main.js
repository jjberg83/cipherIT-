let btnCipher = document.querySelector('button');
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
                                 .replace(/m/gi, 'o')
                                 .replace(/h/gi, 'p')
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
//0!1 p!&!# 0ø#?/€ 0!/((!/ 2!#1
//jeg heter jørund jenssen berg
