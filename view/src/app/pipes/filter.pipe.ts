import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any = ''): any {
    if (arg === '') { return value; }
    const cadena = arg;
    let filter = cadena.split(':')[0];
    let busqueda: string = cadena.split(':')[1];
    console.log(busqueda);
    busqueda = busqueda.trim();
    console.log(busqueda);
    filter = filter.toLowerCase();
    console.log(filter);
    const resultPosts = [];
    if(value) {
    for (const post of value) {
      if (filter === 'barrio') {
        if (post.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) > -1) {
          resultPosts.push(post);
        }
      }
      if (filter === 'tipo') {
        if (post.pais.toLowerCase().indexOf(busqueda.toLowerCase()) > -1) {
          resultPosts.push(post);
        }
      }
      if (filter === 'infraestrucutra') {
        if (post.cedula.toLowerCase().indexOf(busqueda.toLowerCase()) > -1) {
          resultPosts.push(post);
        }
      }
    }
    }
    return resultPosts;
  }


}
