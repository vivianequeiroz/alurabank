export class Negotiation {

    constructor (readonly date: Date, readonly amount: number, readonly value: number) {}

    get volume() {
        return this.amount * this.value;
    }


    toText(): void {

        console.log(
            `Data: $(this.date), 
            Quantidade: ${this.amount}, 
            Valor: ${this.value}, 
            Volume: ${this.volume}`
        )
    }
}