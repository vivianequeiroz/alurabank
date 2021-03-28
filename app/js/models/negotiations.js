// class to store the negotiations and prevent modifications at the list of negotiations made
class Negotiations {
    constructor() {
        // defining the type of array
        // Array<Negotiation> === Negotiation[]
        this._negotiations = [];
    }
    // it's a good practive indicate the methods return type
    add(negotiation) {
        this._negotiations.push(negotiation);
    }
    //method to acess these encapsulated negotiations
    toArray() {
        //.concat to prevent array modification by creating a new different one with the user information added
        // if user tries to delete it, a copy will be deleted and not the internet reference
        return [].concat(this._negotiations);
    }
}
