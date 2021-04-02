System.register(["./index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, Negotiations;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            Negotiations = class Negotiations extends index_1.Printable {
                constructor() {
                    super(...arguments);
                    this._negotiations = [];
                }
                add(negotiation) {
                    this._negotiations.push(negotiation);
                }
                toArray() {
                    return [].concat(this._negotiations);
                }
                toText() {
                    console.log('Impressão dos dados da negociação:');
                    console.log(JSON.stringify(this._negotiations));
                }
            };
            exports_1("Negotiations", Negotiations);
        }
    };
});
