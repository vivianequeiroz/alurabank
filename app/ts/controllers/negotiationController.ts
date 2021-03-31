import { MessageView, NegotiationsView } from '../views/index';
import { Negotiations, Negotiation } from '../models/index';


export class NegotiationController {
    
    private _inputDate: JQuery;
    private _inputAmount: JQuery;
    private _inputValue: JQuery;
    //ts infer that when a value is assigned to an attribute, it is going to have the same type
    private _negotiations = new Negotiations();
    private _negotiationsView = new NegotiationsView('#negotiationsView', true);
    private _messageView = new  MessageView('#messageView', true);

    constructor() {
        // by the moment controller is instantiated, the dom elements will be available to manipulate
        // casting <> to convert the most generic type to a more specific one
        
        this._inputDate = $('#data');
        this._inputAmount = $('#amount');
        this._inputValue = $('#value');
        // update the view to show model data - empty
        this._negotiationsView.update(this._negotiations);
    }
    

    add(event: Event) {
       
        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if(data.getDay() == DayOfWeek.Saturday || data.getDay() == DayOfWeek.Sunday) {

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