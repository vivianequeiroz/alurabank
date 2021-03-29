// view receives a generic type T that will be replace by the type String at the compilation 
class MessageView extends View {
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
