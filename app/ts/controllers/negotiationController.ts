import { MessageView, NegotiationsView } from '../views/index';
import { Negotiations, Negotiation } from '../models/index';
import { domInject } from '../helpers/decorators/domInject';
import { PartialNegotiation } from '../models/partialNegotiation'
// import { logRuntime } from '../helpers/decorators/index';

export class NegotiationController {
    // Decorators to do a lazy loading of the elements  // Decorators to do a lazy loading of the elements  // Decorators to do a lazy loading of the elements
    
    @domInject('#date')
    private _inputDate: JQuery;

    @domInject('#amount')
    private _inputAmount: JQuery;

    @domInject('#value')
    private _inputValue: JQuery;
  
    //ts infer that when a value is assigned to an attribute, it is going to have the same type
    private _negotiations = new Negotiations();
    private _negotiationsView = new NegotiationsView('#negotiationsView', true);
    private _messageView = new  MessageView('#messageView', true);

    constructor() {
        // by the moment controller is instantiated, the dom elements will be available to manipulate
        // casting <> to convert the most generic type to a more specific one

        // update the view to show model data - empty
        this._negotiationsView.update(this._negotiations);
    }
    
    // @logRuntime()
    add(event: Event) {
       
        event.preventDefault();

        let date = new Date(this._inputDate.val().replace(/-/g, ','));

        if(!this._isBusinessDay(date)) {

            this._messageView.update('Somente negociações em dias úteis podem ser registradas!');
            return 
        }

        const negotiation = new Negotiation (
           
            new Date(this._inputDate.val().replace(/-/g, ',')),
            parseInt(this._inputAmount.val()),
            parseFloat(this._inputValue.val())
        );

        this._negotiations.add(negotiation);

        this._negotiations.toArray().forEach(negotiation => {
            console.log(negotiation.date);
            console.log(negotiation.amount);
            console.log(negotiation.value);
        })

        this._negotiationsView.update(this._negotiations);
        this._messageView.update('Negociação adicionada com sucesso!');
    }

    private _isBusinessDay(date: Date) {
        
        return date.getDay() != DayOfWeek.Saturday && date.getDay() != DayOfWeek.Sunday;
    }

    importData() {
        
        function isOk(res: Response) {

            if(res.ok) {
                return res;
            } else {
                throw new Error(res.statusText);
            }
        }
        fetch('http://localhost:8080/dados')
            .then(res => isOk(res))
            .then(res => res.json())
            .then((dados: PartialNegotiation[]) => {
                dados
                .map(dado => new Negotiation(new Date(), dado.vezes, dado.montante))
                .forEach(negotiation => this._negotiations.add(negotiation))
                this._negotiationsView.update(this._negotiations);
                
             } )
            .catch(err => console.log(err)); 
    }
}


enum DayOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}