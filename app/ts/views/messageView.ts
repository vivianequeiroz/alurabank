// view receives a generic type T that will be replace by the type String at the compilation 
class MessageView  extends View<String> {

    template(model: string): string {

        return `<p class="alert alert-info">${model}</p>`;
    }
}