import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'group',
})
export class GroupPipe implements PipeTransform {
  transform(value: any[]): any[] {
    const items = value.reduce((result, value, index, array) => {
      if (index % 2 === 0) {
        result.push(array.slice(index, index + 2));
      }
      return result;
    }, []);

    return items;
  }
}
