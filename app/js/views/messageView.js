System.register(["./view"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var view_1, MessageView;
    return {
        setters: [
            function (view_1_1) {
                view_1 = view_1_1;
            }
        ],
        execute: function () {
            MessageView = class MessageView extends view_1.View {
                template(model) {
                    return `<p class="alert alert-info">${model}</p>`;
                }
            };
            exports_1("MessageView", MessageView);
        }
    };
});
