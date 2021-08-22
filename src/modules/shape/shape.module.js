import { Module } from '../../core/module';
import { getRandomEl, getRandomColor, random } from '../../utils';
import './shape.css';

export class ShapeModule extends Module {
  #collection;
  constructor(type, text) {
    super(type, text);
    this.#collection = ['ball', 'square', 'oval'];
  }

  trigger() {
    const trash = document.querySelectorAll('.block');
    setTimeout(() => {
      trash.forEach((item) => {
        item.remove();
      });
    }, 1000);
    const block = document.createElement('div');
    block.classList.add('block');
    block.classList.add(getRandomEl(this.#collection));
    this.#styles(block, random(100, 200), getRandomColor(), random(0, 500));
    document.body.appendChild(block);
  }

  #styles(el, size, color, margin) {
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    el.style.top = margin + 'px';
    setTimeout(() => {
      el.style.left = margin * 2 + 'px';
    }, 0);
    el.style.backgroundColor = color;
  }
}
