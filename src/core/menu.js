import { BackgroundModule } from '../modules/background.module';
import { ClicksModule } from '../modules/clickCounter/clicks.module';
import { ShapeModule } from '../modules/shape.module';
import { RandomSound } from '../modules/randomSound.module';
import { Timer } from '../modules/timer.module';
import { Modal } from '../modules/modal.module';

export class Menu {
  constructor(selector) {
    this.el = document.querySelector(selector);
    this.bgColor = new BackgroundModule('bgColor', 'Сменить задний фон');
    this.counter = new ClicksModule('counter', 'Считать клики');
    this.figure = new ShapeModule('changeFigure', 'Создать фигуру');
    this.sound = new RandomSound('sound', 'Рандомный звук');
    this.timer = new Timer('timer', 'Таймер отсчета');
    this.modal = new Modal('modal', 'Кастомное сообщение');

    this.data = '';

    document.body.addEventListener('click', (event) => {
      if (event.target.offsetParent !== this.el) {
        this.close();
      }
    });

    document.body.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      const x = event.offsetX;
      const y = event.offsetY;
      this.open(x, y);
    });
  }

  open(x, y) {
    this.el.innerHTML = '';
    this.el.classList.add('open');
    this.el.style.top = y + 'px';
    this.el.style.left = x + 'px';
    this.add([
      this.bgColor.toHTML(),
      this.counter.toHTML(),
      this.figure.toHTML(),
      this.sound.toHTML(),
      this.timer.toHTML(),
      this.modal.toHTML(),
    ]);
  }

  close() {
    this.el.classList.remove('open');
  }

  add(arr) {
    this.el.append(...arr);
    const list = document.querySelectorAll('.menu-item');
    list.forEach((item) => {
      item.addEventListener('click', () => {
        this.data = item.dataset.type;
        switch (this.data) {
          case 'bgColor':
            this.bgColor.trigger();
            break;
          case 'counter':
            this.counter.trigger();
            break;
          case 'changeFigure':
            this.figure.trigger();
            break;
          case 'sound':
            this.sound.trigger();
            break;
          case 'timer':
            this.timer.trigger();
            break;
          case 'modal':
            this.modal.trigger();
            break;
        }
        this.close();
      });
    });
  }
}
