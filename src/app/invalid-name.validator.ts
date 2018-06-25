import { ValidatorFn, AbstractControl } from '@angular/forms';

export function invalidNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? {'forbidden': control.value} : null;
    };
}
