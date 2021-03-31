export function logRuntime() {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            const shiftReturn = originalMethod.apply(this, args);
            return shiftReturn;
        }

        return descriptor;
    }
}