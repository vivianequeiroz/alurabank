var Views;
(function (Views) {
    class View {
        constructor(selector) {
            this._element = $(selector);
        }
        update(model) {
            this._element.html(this.template(model));
        }
    }
    Views.View = View;
})(Views || (Views = {}));
