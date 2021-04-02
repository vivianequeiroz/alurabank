import {Negotiation, Printable } from './index'

// class to store the negotiations and prevent modifications at the list of negotiations made
export class Negotiations implements Printable {
    // defining the type of array
    // Array<Negotiation> === Negotiation[]
    private _negotiations: Negotiation[] = [];

    // it's a good practive indicate the methods return type
    add(negotiation: Negotiation): void {

        this._negotiations.push(negotiation);
    }

    //method to acess these encapsulated negotiations

    toArray(): Negotiation[] {
        //.concat to prevent array modification by creating a new different one with the user information added
        // if user tries to delete it, a copy will be deleted and not the internet reference
        return ([] as Negotiation[]).concat(this._negotiations);
        // strictNullChecks -> ([] as Negotiation) necessary because the array that will be received could be of any type
    }

    toText(): void {

        console.log('Impressão dos dados da negociação:');
        console.log(JSON.stringify(this._negotiations));
    }

}