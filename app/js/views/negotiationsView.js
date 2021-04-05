System.register(["./view"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var view_1, NegotiationsView;
    return {
        setters: [
            function (view_1_1) {
                view_1 = view_1_1;
            }
        ],
        execute: function () {
            NegotiationsView = class NegotiationsView extends view_1.View {
                template(model) {
                    return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATE</th>
                <th>AMOUNT</th>
                <th>VALUE</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        <tbody>
        ${model.toArray().map(negotiation => `   
                <tr>
                    <td>${negotiation.date.getDate()}/${negotiation.date.getMonth() + 1}/${negotiation.date.getFullYear()}</td>
                    <td>${negotiation.amount}</td>
                    <td>${negotiation.value}</td>
                    <td>${negotiation.volume}</td>
                </tr>                        
            `).join('')}   
        </tbody>

        <tfoot>
        </tfoot>
        </table>     
        `;
                }
            };
            exports_1("NegotiationsView", NegotiationsView);
        }
    };
});
