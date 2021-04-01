export function logRuntime(inSeconds: boolean = false) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {


        let unit = 'ms';
        let divider = 1;
        if(inSeconds) {
            unit = 's';
            divider = 1000;
        }

        console.log('------------------------');
        console.log(`Parâmetros passados para o método ${propertyKey}: ${JSON.stringify(args)}`);
        const t1 = performance.now();
        const shiftReturn = originalMethod.apply(this, args);
        const t2 = performance.now();
        console.log(`O retorno do método ${propertyKey} é ${JSON.stringify(shiftReturn)}`);
        console.log(`O método ${propertyKey} demorou ${(t2 - t1)/divider} ${unit}`);

            return shiftReturn;
        }

        return descriptor;
    }
}