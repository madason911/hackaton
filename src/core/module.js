import { BackgroundModule } from '../modules/background.module';

export class Module {
  constructor(type, text) {
    if (!type) {
      throw new Error('Please specify "type" param');
    }
    if (!text) {
      throw new Error('Please specify "text" param');
    }
    this.type = type;
    this.text = text;
  }

  trigger(data) {
    switch (data) {
      case 'bgColor':
        this.bgColor.trigger();
        break;
    }
  }

  toHTML() {
    const list = document.createElement('li');
    list.classList.add('menu-item');
    list.dataset.type = this.type;
    list.innerText = this.text;
    return list;
  }
}
