class NegotiationController {
    constructor(_data, _amount, _value) {
        // by the moment controller is instantiated, the dom elements will be available to manipulate
        // casting <> to convert the most generic type to a more specific one
        this._data = _data;
        this._amount = _amount;
        this._value = _value;
        //ts infer that when a value is assigned to an attribute, it is going to have the same type
        this._negotiations = new Negotiations();
        this._negotiationsView = new NegotiationsView('#negotiationsView');
        this._inputDate = document.querySelector('#data');
        this._inputAmount = document.querySelector('#amount');
        this._inputValue = document.querySelector('#value');
        this._negotiationsView.update();
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this._inputDate.value.replace(/-/g, ',')), parseInt(this._inputAmount.value), parseFloat(this._inputValue.value));
        this._negotiations.add(negotiation);
        this._negotiations.toArray().forEach(negotiation => {
            console.log(negotiation.date);
            console.log(negotiation.amount);
            console.log(negotiation.value);
        });
        console.log(negotiation);
    }
}
