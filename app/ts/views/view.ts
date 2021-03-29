// classe trasformed into abstract class since View has no direct implementation 
abstract class View<T> {

    // with protected only the methods from the class itself and its children can access properties 
    // by the access of properties made by the father (since heritage was used) protrected can now be replaced by private
    private _element: Element;

    constructor(selector: string) {

        this._element = document.querySelector(selector);
    }

    update(model: T): void {

        this._element.innerHTML = this.template(model);
    }

    // the class that inherit this method is forced to fill it 
    abstract template(model: T): string; 
}