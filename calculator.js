let screen = document.getElementById('screen');
let buttons = Array.from(document.getElementsByClassName('button'));
let clearBtn = document.getElementById('clear');

console.l
buttons.map(button =>{
    button.addEventListener('click', ()=>{
        switch(button.innerText){
          case 'C':
              clearBtn.innerText = "AC"
              screen.innerText = ''
              break;
          case 'AC':
              screen.innerText = ''
              break;
          case '=':
              screen.innerText = eval(screen.innerText);
              break;
          case 'bckspc':
              screen.innerText = screen.innerText.slice(0,-1) // 123455
              break;
          default:
              screen.innerText += button.innerText;
              clearBtn.innerText = "C"
              break;
        }
    })
});

// The solution below iterates over and HTMLCollections and NodeList (NOTE: they are array-like. They are not javascript arrays)
// let buttons = document.getElementsByClassName('button'); // this implementation give is an HTMLCollection.
// let buttons = document.querySelectorAll('.button'); // this implementation give is an NodeList.


// for(let i = 0; i < buttons.length; i++){
//     buttons[i].addEventListener('click', ()=>{
//       switch(buttons[i].innerText){
//         case 'C':
//             clearBtn.innerText = "AC"
//             screen.innerText = ''
//             break;
//         case 'AC':
//             screen.innerText = ''
//             break;
//         case '=':
//             screen.innerText = eval(screen.innerText);
//             break;
//         case 'bckspc':
//             screen.innerText = screen.innerText.slice(0,-1) // 123455
//             break;
//         default:
//             screen.innerText += buttons[i].innerText;
//             clearBtn.innerText = "C"
//             break;
//       }
//     })
// }