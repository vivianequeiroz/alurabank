System.register(["../models/negotiations", "./../views/negotiationsView", "../views/messageView", "../models/negotiation"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var negotiations_1, negotiationsView_1, messageView_1, negotiation_1, NegotiationController;
    return {
        setters: [
            function (negotiations_1_1) {
                negotiations_1 = negotiations_1_1;
            },
            function (negotiationsView_1_1) {
                negotiationsView_1 = negotiationsView_1_1;
            },
            function (messageView_1_1) {
                messageView_1 = messageView_1_1;
            },
            function (negotiation_1_1) {
                negotiation_1 = negotiation_1_1;
            }
        ],
        execute: function () {
            NegotiationController = class NegotiationController {
                constructor() {
                    this._negotiations = new negotiations_1.Negotiations();
                    this._negotiationsView = new negotiationsView_1.NegotiationsView('#negotiationsView');
                    this._messageView = new messageView_1.MessageView('#messageView');
                    this._inputDate = $('#data');
                    this._inputAmount = $('#amount');
                    this._inputValue = $('#value');
                    this._negotiationsView.update(this._negotiations);
                }
                add(event) {
                    event.preventDefault();
                    const negotiation = new negotiation_1.Negotiation(new Date(this._inputDate.val().replace(/-/g, ',')), parseInt(this._inputAmount.val()), parseFloat(this._inputValue.val()));
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
