System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegotiationController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegotiationController = class NegotiationController {
                constructor() {
                    this._negotiations = new index_2.Negotiations();
                    this._negotiationsView = new index_1.NegotiationsView('#negotiationsView');
                    this._messageView = new index_1.MessageView('#messageView');
                    this._inputDate = $('#data');
                    this._inputAmount = $('#amount');
                    this._inputValue = $('#value');
                    this._negotiationsView.update(this._negotiations);
                }
                add(event) {
                    event.preventDefault();
                    const negotiation = new index_2.Negotiation(new Date(this._inputDate.val().replace(/-/g, ',')), parseInt(this._inputAmount.val()), parseFloat(this._inputValue.val()));
                    this._negotiations.add(negotiation);
                    this._negotiations.toArray().forEach(negotiation => {
                        console.log(negotiation.date);
                        console.log(negotiation.amount);
                        console.log(negotiation.value);
                    });
                    this._negotiationsView.update(this._negotiations);
                    this._messageView.update('Negociação adicionada com sucesso!');
                }
            };
            exports_1("NegotiationController", NegotiationController);
        }
    };
});
