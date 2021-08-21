import { Module } from '../core/module';

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    console.log('figure');

    // создать в css селекторы square triagure ball и тд, создать массив из этих классов
    // создавать div через document.createElement и применять ему этот класс
    // так же div должен быть разного размера(width && height) и разное положение(style.top && style.left)
    // при создании новой фигуры прошлая должна исчезать (querySelectorAll -> перебрать массив -> remove() каждому)
  }
}
