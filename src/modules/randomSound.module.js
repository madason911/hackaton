import { Module } from '../core/module';

export class RandomSound extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    console.log('sound');

    // рандомный звук
  }
}
