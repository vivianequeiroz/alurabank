class View<T> {

    // with protected only the methods from the class itself and its children can access properties 
    protected _element: Element;

    constructor(selector: string) {

        this._element = document.querySelector(selector);
    }

    update(model: T): void {

        this._element.innerHTML = this.template(model);
    }

    template(model: T): string {
        // return must be defined by children
        throw Error('Você deve implementar o método template.');
       
    }
}