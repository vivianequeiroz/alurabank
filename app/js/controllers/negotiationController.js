class NegotiationController {
    constructor() {
        this._negotiations = new Negotiations();
        this._negotiationsView = new Views.NegotiationsView('#negotiationsView');
        this._messageView = new Views.MessageView('#messageView');
        this._inputDate = $('#data');
        this._inputAmount = $('#amount');
        this._inputValue = $('#value');
        this._negotiationsView.update(this._negotiations);
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this._inputDate.val().replace(/-/g, ',')), parseInt(this._inputAmount.val()), parseFloat(this._inputValue.val()));
        this._negotiations.add(negotiation);
        this._negotiations.toArray().forEach(negotiation => {
            console.log(negotiation.date);
            console.log(negotiation.amount);
            console.log(negotiation.value);
        });
        this._negotiationsView.update(this._negotiations);
        this._messageView.update('Negociação adicionada com sucesso!');
    }
}
