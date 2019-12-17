import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(lista: any[], search: string): any {
    if (lista.length == 0) {
      return []
    }
    if (!search){
      return lista
    }
    
    return lista.filter(v => Object.keys(v).map(key => v[key]).join('$$').toLowerCase().indexOf(search.toLowerCase()) > -1)
  }

}
