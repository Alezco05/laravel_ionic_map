import { Component } from '@angular/core';
import { PqrService } from '../services/pqr.service';
import {HttpClient} from '@angular/common/http';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  pqrs: any[] = [];
  filterPost = '';
  constructor(private pqrService: PqrService, private http: HttpClient) {
     this.pqrService.getPqrs_neighbor().subscribe(resp => this.pqrs = resp);
  }
  get_excel(){
    return this.http.get('http://localhost:8000/get_excel',  { responseType: 'blob' })
    .subscribe((resp: any) => {
      FileSaver.saveAs(resp, `Reporte.xlsx`)
    });
  }
 
}
