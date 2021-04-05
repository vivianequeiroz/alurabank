import { Negotiation, PartialNegotiation } from '../models/index';

export class NegotiationService {

    obtainNegotiation(handler: HandlerFunction): Promise<Negotiation[]> {

        return <Promise<Negotiation[]>> fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: PartialNegotiation[]) =>
                dados
                    .map(dado => new Negotiation(new Date(), dado.vezes, dado.montante))
            )
            .catch(err => { 
                console.error(err);
                throw new Error('It wasn\'t possible to import negotiations :(');
            });
    }
}

export interface HandlerFunction {

    (res: Response): Response;
}