import { MyObject } from './MyObject';

export class Negotiation implements MyObject<Negotiation> {

    constructor (readonly date: Date, readonly amount: number, readonly value: number) {}

    get volume() {
        return this.amount * this.value;
    }


    toText(): void {

        console.log('Negotiation info:');
        console.log(
            `Data: ${this.date}, 
            Quantidade: ${this.amount}, 
            Valor: ${this.value}, 
            Volume: ${this.volume}`
        );
    }

    isEqual(negotiation: Negotiation): boolean {

        return this.date.getDate() === negotiation.date.getDate()
        && this.date.getMonth() === negotiation.date.getMonth()
        && this.date.getFullYear() === negotiation.date.getFullYear();
    }


}