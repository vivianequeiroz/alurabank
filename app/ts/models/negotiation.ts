import { Printable } from './printable';
import { Comparable } from './comparable';

export class Negotiation implements Printable, Comparable<Negotiation> {

    constructor (readonly date: Date, readonly amount: number, readonly value: number) {}

    get volume() {
        return this.amount * this.value;
    }


    toText(): void {

        console.log('Impressão dos dados da negociação:');
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