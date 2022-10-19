import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'frnum'
})
export class FrnumPipe implements PipeTransform {

  transform(val: string) {
    return new Intl.NumberFormat('fr-FR').format(Number(val));
  }
}
