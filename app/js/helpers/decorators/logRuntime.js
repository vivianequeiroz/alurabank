System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logRuntime() {
        return function (target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = function (...args) {
                const shiftReturn = originalMethod.apply(this, args);
                return shiftReturn;
            };
            return descriptor;
        };
    }
    exports_1("logRuntime", logRuntime);
    return {
        setters: [],
        execute: function () {
        }
    };
});
