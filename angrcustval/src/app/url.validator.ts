import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
  if (!control.value.startsWith('https') || !control.value.includes('.io')) {
    return { invalidUrl: true };
  }
  return null;
}

/*

This code uses the AbstractControl class, which is the base class for FormControls, FormGroups, and FormArrays. This allows access to the value of the FormControl.

This code will check to see if the value startsWith the string of characters for https. It will also check to see if the value includes the string of characters for .io.

If the validation fails, it will return an object with a key for the error name, invalidUrl, and a value of true.

Otherwise, if the validation passes, it will return null.

*/