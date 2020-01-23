import { AbstractControl } from '@angular/forms';

export class MathValidators {
  static addition(form: AbstractControl) {
    const { a, b, answer } = form.value;
    console.log(a + b);
    console.log(answer);
    console.log(a + b === +answer);
    if (a + b === +answer) {
      return null;
    }
    return {
      addition: true
    };
  }

  static subtraction() {}

  static multiplication() {}

  static division() {}
}
