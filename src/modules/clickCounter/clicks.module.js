import { Module } from '../../core/module';
import './clicks.css';

export class ClicksModule extends Module {
  #container;
  #doubleContainer;
  #time;
  #result;
  #doubleCount;
  #count;
  #check;
  #doubleStart;
  #start;
  #clickHandler;
  #doubleClickHandler;
  #back;
  #btnClose;
  constructor(type, text) {
    super(type, text);
    this.#check = true; // обработка ошибок
    this.#count = -1;
    this.#doubleCount = 0;
    this.#container = this.#addDiv();
    this.#doubleContainer = this.#addDiv();
    this.#time = this.#addDiv();
    this.#result = this.#addDiv();
    this.#back = this.#addDiv();
    this.#btnClose = this.#createBtn('button', 'Закрыть', 'btn__close');
    this.#addedClasses();
    this.#start = function () {
      this.#count++;
      this.#container.innerText = `${this.#count} одиночных кликов`;
    };
    this.#doubleStart = function () {
      this.#doubleCount++;
      this.#doubleContainer.innerText = `${this.#doubleCount} двойных кликов`;
    };
    this.#clickHandler = this.#start.bind(this);
    this.#doubleClickHandler = this.#doubleStart.bind(this);
  }

  trigger() {
    if (this.#check) {
      // try
      this.#clear(); // clear all div's
      this.#count = -1; //default meaning
      this.#doubleCount = 0;
      let ms = prompt('Введите время в секундах');
      if (Number(ms)) {
        if (Number(ms) > 10 || Number(ms) < 0) {
          // check seconds
          alert('Время не должно быть больше 10 или меньше 0');
        } else {
          this.#fill(ms); // fill all div's
          setTimeout(() => {
            this.#animation();
          }, 0);
          const timeout = setInterval(() => {
            // time interval
            --ms;
            this.#time.innerText = ms;
          }, 990);
          setTimeout(() => {
            // stop couting
            this.#end(timeout);
          }, Number(ms) * 1000);
        }
      } else {
        alert('Это не число');
      }
    } else {
      console.log('Таймер еще не завершен'); // if !check
    }
  }

  #remove() {
    document.body.removeEventListener('click', this.#clickHandler);
    document.body.removeEventListener('dblclick', this.#doubleClickHandler);
  }

  #end(timeout) {
    this.#check = true;
    this.#remove();
    clearInterval(timeout);
    this.#container.innerText = `Ваш результат одиночных кликов: ${this.#count}`;
    this.#doubleContainer.innerText = `Ваш результат двойных кликов: ${this.#doubleCount} `;
    this.#result.classList.add('result');
    this.#result.innerText = `общее число кликов: ${this.#count + this.#doubleCount}`;
    document.body.appendChild(this.#result);
    this.#time.innerText = 'Время вышло';
    this.#removeClasses();
    this.#back.classList.add('back__modal');
    this.#btnClose.addEventListener('click', () => {
      this.#clear();
    });
    this.#result.appendChild(this.#btnClose);
    document.body.appendChild(this.#back);
  }
  #fill(ms) {
    this.#check = false;
    this.#container.innerText = '0 одиночных кликов';
    this.#doubleContainer.innerText = '0 двойных кликов';
    this.#time.innerText = ms;
    document.body.append(this.#container, this.#doubleContainer, this.#time);
    document.body.addEventListener('click', this.#clickHandler);
    document.body.addEventListener('dblclick', this.#doubleClickHandler);
  }
  #clear() {
    const trash = document.querySelectorAll('div');
    trash.forEach((item) => {
      return item.remove();
    });
    this.#remove();
  }

  #addDiv() {
    return document.createElement('div');
  }

  #addedClasses() {
    this.#container.classList.add('counter');
    this.#doubleContainer.classList.add('counter');
    this.#container.classList.add('first');
    this.#doubleContainer.classList.add('second');
    this.#time.classList.add('time');
  }

  #animation() {
    this.#container.classList.add('active');
    this.#doubleContainer.classList.add('active');
  }

  #removeClasses() {
    this.#container.classList.remove('active');
    this.#doubleContainer.classList.remove('active');
  }

  #createBtn(selector, text, classes) {
    const btn = document.createElement(selector);
    btn.classList.add(classes);
    btn.innerText = text;
    return btn;
  }
}
