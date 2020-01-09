import './style/s1.styl';
import './style/s2.styl';

function component() {
  let element = document.createElement('div');

  element.innerHTML = 'hello world!';
  element.classList.add('hello1');
  element.classList.add('hello2');

  return element;
}

document.body.appendChild(component());