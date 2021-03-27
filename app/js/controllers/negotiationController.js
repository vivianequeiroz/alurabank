class NegotiationController {
    constructor() {
        // by the moment controller is instantiated, the dom elements will be available to manipulate
        this._inputData = document.querySelector('#data');
        this._inputAmount = document.querySelector('#amount');
        this._inputValue = document.querySelector('#value');
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(this._inputData.value, this._inputAmount.value, this._inputValue.value);
        console.log(negotiation);
    }
}
