import { AbstractControl } from '@angular/forms';

export class MathValidators {
  static addition(target: string, sourceOne: string, sourceTwo: string) {
    return (form: AbstractControl) => {
      const sum = form.value[target];
      const op1 = form.value[sourceOne];
      const op2 = form.value[sourceTwo] ;
      if (op1 + op2 === +sum) {
        return null;
      }
      return {
        addition: true
      };
    };
  }

  static subtraction() {}

  static multiplication() {}

  static division() {}
}
