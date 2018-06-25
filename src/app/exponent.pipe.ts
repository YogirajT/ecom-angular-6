import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'exponent'
})
export class ExponentPipe implements PipeTransform {
    transform(value: number, exp: number): number {
        return Math.pow(value, isNaN(exp) ? 1 : exp);
    }
}
