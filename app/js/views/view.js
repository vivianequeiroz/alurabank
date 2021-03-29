// classe trasformed into abstract class since View has no direct implementation 
class View {
    constructor(selector) {
        this._element = $(selector);
    }
    update(model) {
        this._element.html(this.template(model));
    }
}
