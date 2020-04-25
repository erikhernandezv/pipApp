import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'switchtext'
})
export class SwitchtextPipe implements PipeTransform {

  transform(value: string, _view: boolean = true): string {
    return (_view) ? '*'.repeat( value.length ) : value;
  }

}
