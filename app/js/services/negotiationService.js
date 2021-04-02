System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, NegotiationService;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegotiationService = class NegotiationService {
                obtainNegotiation(handler) {
                    return fetch('http://localhost:8080/dados')
                        .then(res => handler(res))
                        .then(res => res.json())
                        .then((dados) => dados
                        .map(dado => new index_1.Negotiation(new Date(), dado.vezes, dado.montante)))
                        .catch(err => {
                        console.error(err);
                        throw new Error('Não foi possível importar as negociações :(');
                    });
                }
            };
            exports_1("NegotiationService", NegotiationService);
        }
    };
});
