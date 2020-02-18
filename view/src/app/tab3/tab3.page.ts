import { Component } from '@angular/core';
import { PqrService } from '../services/pqr.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  pqrs: any[] = [];
  HEROES = [
  {id: 1, name:'Superman'},
  {id: 2, name:'Batman'},
  {id: 5, name:'BatGirl'},
  {id: 3, name:'Robin'},
  {id: 4, name:'Flash'}
];
  constructor(private pqrService: PqrService) {
    // this.pqrService.getPqrs_neighbor().subscribe(resp => (this.pqrs = resp));
  }
}
