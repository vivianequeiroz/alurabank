System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negotiations;
    return {
        setters: [],
        execute: function () {
            Negotiations = class Negotiations {
                constructor() {
                    this._negotiations = [];
                }
                add(negotiation) {
                    this._negotiations.push(negotiation);
                }
                toArray() {
                    return [].concat(this._negotiations);
                }
            };
            exports_1("Negotiations", Negotiations);
        }
    };
});
