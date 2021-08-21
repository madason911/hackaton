import { Module } from '../core/module';

export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    console.log('bg');

    // импортировать функцию getRandomColor из файла utils и менять цвет body относительно того что возвращает функция
  }
}
