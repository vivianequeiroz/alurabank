class NegotiationController {
    constructor() {
        // by the moment controller is instantiated, the dom elements will be available to manipulate
        // casting <> to convert the most generic type to a more specific one
        //ts infer that when a value is assigned to an attribute, it is going to have the same type
        this._negotiations = new Negotiations();
        this._negotiationsView = new NegotiationsView('#negotiationsView');
        this._messageView = new MessageView('#messageView');
        this._inputDate = $('#data');
        this._inputAmount = $('#amount');
        this._inputValue = $('#value');
        // update the view to show model data - empty
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
