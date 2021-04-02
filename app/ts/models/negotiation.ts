import { Printable } from './printable';

export class Negotiation extends Printable {

    constructor (readonly date: Date, readonly amount: number, readonly value: number) {

        super();
    }

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
}