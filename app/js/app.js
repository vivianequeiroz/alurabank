const controller = new NegotiationController();
document
    .querySelector('.form')
    .addEventListener('submit', controller.add.bind(controller));
// with js data can be easily modified with reatributions as "negotiation._value = 3"
