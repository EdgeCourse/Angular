import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'frcurrency'
  
})
export class FrcurrencyPipe implements PipeTransform {

  transform(val: string) {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
    }).format(Number(val));
  }


}
