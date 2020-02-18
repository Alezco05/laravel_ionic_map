import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any = ""): any {
    if (arg === "") {
      return value;
    }
    const cadena = arg;
    let filter = cadena.split(":")[0];
    let busqueda: string = cadena.split(":")[1];
    if (busqueda != undefined) busqueda = busqueda.trim();
    if (filter != undefined) filter = filter.toLowerCase();
    const resultPosts = [];
    if (value) {
      for (const post of value) {
        if (post != undefined) {
          if (filter === "barrio" && post.neighbor != undefined) {
            if (
              post.neighbor.toLowerCase().indexOf(busqueda.toLowerCase()) > -1
            ) {
              resultPosts.push(post);
            }
          }
          if (filter === "infraestructura") {
            if (
              post.infrastructure
                .toLowerCase()
                .indexOf(busqueda.toLowerCase()) > -1
            ) {
              resultPosts.push(post);
            }
          }
          if (filter === "problema") {
            if (
              post.problem.toLowerCase().indexOf(busqueda.toLowerCase()) > -1
            ) {
              resultPosts.push(post);
            }
          }
        }
      }
    }
    return resultPosts;
  }
}
