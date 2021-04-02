System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function debounce(milliseconds = 500) {
        return function (target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            let timer = 0;
            descriptor.value = function (...args) {
                const event = args[0];
                if (event && event.preventDefault) {
                    event.preventDefault();
                }
                ;
                clearInterval(timer);
                timer = setTimeout(() => originalMethod.apply(this, args), milliseconds);
            };
            return descriptor;
        };
    }
    exports_1("debounce", debounce);
    return {
        setters: [],
        execute: function () {
        }
    };
});
