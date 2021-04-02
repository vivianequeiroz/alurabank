System.register(["./printable"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var printable_1, Negotiation;
    return {
        setters: [
            function (printable_1_1) {
                printable_1 = printable_1_1;
            }
        ],
        execute: function () {
            Negotiation = class Negotiation extends printable_1.Printable {
                constructor(date, amount, value) {
                    super();
                    this.date = date;
                    this.amount = amount;
                    this.value = value;
                }
                get volume() {
                    return this.amount * this.value;
                }
                toText() {
                    console.log('Impressão dos dados da negociação:');
                    console.log(`Data: ${this.date}, 
            Quantidade: ${this.amount}, 
            Valor: ${this.value}, 
            Volume: ${this.volume}`);
                }
            };
            exports_1("Negotiation", Negotiation);
        }
    };
});
