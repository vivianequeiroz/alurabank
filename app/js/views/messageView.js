import { View } from './view';
export class MessageView extends View {
    template(model) {
        return `<p class="alert alert-info">${model}</p>`;
    }
}
