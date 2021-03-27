// const negotiation = new Negotiation(new Date(), 1, 100);
// console.log(negotiation);
// // with js data can be easily modified with reatributions as "negotiation._value = 3"
const controller = new NegotiationController();

document
    .querySelector('.form')
    .addEventListener('submit', controller.add.bind(controller));