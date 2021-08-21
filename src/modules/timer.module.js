import { Module } from '../core/module';

export class Timer extends Module {
  constructor(type, text) {
    super(type, text);
  }
  trigger() {
    console.log('timer');

    // Должен всплывать prompt пользователь указывает время появляется(с анимацией) блок с временем(видно как идет отсчет)
    // после окончания времени в блоке меняться текст на "Время вышло" и две кнопка по нажатию первой
    // повторное выполение кода по нажатию второй remove() этот блок с временем
  }
}
