class Negotiation {

    constructor(date, amount, value) {
        // ._ to indicate that the property can't be accessible out of the class 
        this._date = date;
        this._amount = amount;
        this._value = value;
    }

       // methods that give access  to these properties
    get date() {
        return this._date;
    }

    get amount() {
        return this._amount;
    }

    get value() {
        return this.value;
    }

    get volume() {
        return this._amount * this._value;
    }
}