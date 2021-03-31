System.register(["../views/index", "../models/index", "../helpers/decorators/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, NegotiationController, DayOfWeek;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            NegotiationController = class NegotiationController {
                constructor() {
                    this._negotiations = new index_2.Negotiations();
                    this._negotiationsView = new index_1.NegotiationsView('#negotiationsView', true);
                    this._messageView = new index_1.MessageView('#messageView', true);
                    this._inputDate = $('#data');
                    this._inputAmount = $('#amount');
                    this._inputValue = $('#value');
                    this._negotiationsView.update(this._negotiations);
                }
                add(event) {
                    event.preventDefault();
                    let date = new Date(this._inputDate.val().replace(/-/g, ','));
                    if (!this._isBusinessDay(date)) {
                        this._messageView.update('Somente negociações em dias úteis podem ser registradas!');
                        return;
                    }
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
                _isBusinessDay(date) {
                    return date.getDay() != DayOfWeek.Saturday && date.getDay() != DayOfWeek.Sunday;
                }
            };
            __decorate([
                index_3.logRuntime()
            ], NegotiationController.prototype, "add", null);
            exports_1("NegotiationController", NegotiationController);
            (function (DayOfWeek) {
                DayOfWeek[DayOfWeek["Sunday"] = 0] = "Sunday";
                DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
                DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
                DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
                DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
                DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
                DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
            })(DayOfWeek || (DayOfWeek = {}));
        }
    };
});
