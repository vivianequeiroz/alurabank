var Views;
(function (Views) {
    class MessageView extends Views.View {
        template(model) {
            return `<p class="alert alert-info">${model}</p>`;
        }
    }
    Views.MessageView = MessageView;
})(Views || (Views = {}));
