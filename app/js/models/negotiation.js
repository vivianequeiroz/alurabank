System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negotiation;
    return {
        setters: [],
        execute: function () {
            Negotiation = class Negotiation {
                constructor(date, amount, value) {
                    this.date = date;
                    this.amount = amount;
                    this.value = value;
                }
                get volume() {
                    return this.amount * this.value;
                }
            };
            exports_1("Negotiation", Negotiation);
        }
    };
});
