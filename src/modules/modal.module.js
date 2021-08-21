import { Module } from '../core/module';

export class Modal extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    console.log('modal');
  }
}
