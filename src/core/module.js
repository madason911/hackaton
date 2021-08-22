export class Module {
  #type;
  #text;
  constructor(type, text) {
    if (!type) {
      throw new Error('Please specify "type" param');
    }
    if (!text) {
      throw new Error('Please specify "text" param');
    }
    this.#type = type;
    this.#text = text;
  }

  toHTML() {
    const list = document.createElement('li');
    list.classList.add('menu-item');
    list.dataset.type = this.#type;
    list.innerText = this.#text;
    return list;
  }
}
