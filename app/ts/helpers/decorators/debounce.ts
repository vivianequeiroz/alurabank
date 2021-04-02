export function debounce
(milliseconds = 500) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const originalMethod = descriptor.value;

        let timer = 0;

        descriptor.value = function(...args: any[]) {
        
            const event = <Event>args[0];
            if(event && event.preventDefault) {
                event.preventDefault()
            };
            clearInterval(timer);
            timer = setTimeout(() => originalMethod.apply(this, args), milliseconds);
        }

        return descriptor;
    }
}