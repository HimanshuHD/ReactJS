// Declarative Code - Just tell what to do, instead doing it line-by-line.
// Thus reduces line of code
//
// ReactDOM.render(
//     <h1 class="header">Hello React!</h1>,
//     document.getElementById('app')
// );
//
// Imperative Code - Above code using Vanilla JS
//
const h1 = document.createElement('h1');
h1.textContent = 'Hello React!';
h1.className = 'header';
document.getElementById('app').append(h1);