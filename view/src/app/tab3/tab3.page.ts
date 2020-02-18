import { Component } from '@angular/core';
import { PqrService } from '../services/pqr.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  pqrs: any[] = [];
  filterPost = '';
  constructor(private pqrService: PqrService) {
     this.pqrService.getPqrs_neighbor().subscribe(resp => this.pqrs = resp);
  }
}
