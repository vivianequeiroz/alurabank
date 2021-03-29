class View {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }
    update(model) {
        this._element.innerHTML = this.template(model);
    }
    template(model) {
        // return must be defined by children
        throw Error('Você deve implementar o método template.');
    }
}
