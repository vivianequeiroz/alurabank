export class Negotiation {

    constructor (readonly date: Date, readonly amount: number, readonly value: number) {}

    get volume() {
        return this.amount * this.value;
    }
}