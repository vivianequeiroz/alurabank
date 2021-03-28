class NegotiationController {
    
    private _inputDate: HTMLInputElement;
    private _inputAmount: HTMLInputElement;
    private _inputValue: HTMLInputElement;
    //ts infer that when a value is assigned to an attribute, it is going to have the same type
    private _negotiations = new Negotiations();
    private _negotiationsView = new NegotiationsView('#negotiationsView');

    constructor(private _data: Date, private _amount: number, private _value: number) {
        // by the moment controller is instantiated, the dom elements will be available to manipulate
        // casting <> to convert the most generic type to a more specific one
        
        this._inputDate = <HTMLInputElement>document.querySelector('#data');
        this._inputAmount = <HTMLInputElement>document.querySelector('#amount');
        this._inputValue = <HTMLInputElement>document.querySelector('#value');
        this._negotiationsView.update();
    }

    add(event: Event) {
       
        event.preventDefault();

        const negotiation = new Negotiation (
           
            new Date(this._inputDate.value.replace(/-/g, ',')),
            parseInt(this._inputAmount.value),
            parseFloat(this._inputValue.value)
        );

        this._negotiations.add(negotiation);

        this._negotiations.toArray().forEach(negotiation => {
            console.log(negotiation.date);
            console.log(negotiation.amount);
            console.log(negotiation.value);
        });
        console.log(negotiation)
    }
}