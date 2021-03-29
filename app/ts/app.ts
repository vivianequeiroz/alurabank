const controller = new NegotiationController();

$('.form').submit(controller.add.bind(controller));

// with js data can be easily modified with reatributions as "negotiation._value = 3"
