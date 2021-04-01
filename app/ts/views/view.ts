import { logRuntime } from '../helpers/decorators/index';

// classe trasformed into abstract class since View has no direct implementation 
export abstract class View<T> {

    // with protected only the methods from the class itself and its children can access properties 
    // by the access of properties made by the father (since heritage was used) protrected can now be replaced by private
    private _element: JQuery;
    private _escape: boolean;

    constructor(selector: string, escape:boolean = false) {

        this._element = $(selector);
        this._escape = escape;
    }

    @logRuntime(true)
    update(model: T): void {

        this._element.html(this.template(model));
    }

    // the class that inherit this method is forced to fill it 
    abstract template(model: T): string; 
}