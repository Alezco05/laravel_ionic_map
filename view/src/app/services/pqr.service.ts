import { Injectable } from '@angular/core';
// Models
import {Pqr} from '../interfaces/pqr';
import {ProblemList} from '../interfaces/problem-list';
import {Neighbors} from '../interfaces/neighbors';
// Http
import {HttpClient} from '@angular/common/http';
import { Infrastructures } from '../interfaces/infrastructures';
@Injectable({
  providedIn: 'root'
})
export class PqrService {

  constructor(private http: HttpClient) { }
  getPqrs() {
    return this.http.get<Pqr[]>('http://localhost:8000/api');
  }
  getProblem_list() {
    return this.http.get<ProblemList[]>('http://localhost:8000/problems');
  }
  getNeighbor_list() {
    return this.http.get<Neighbors[]>('http://localhost:8000/neighbors');
  }
  getPqrs_neighbor() {
    return this.http.get<Neighbors[]>('http://localhost:8000/neighbors_list');
  }
  getInfraestucture(){
    return this.http.get<Infrastructures[]>('http://localhost:8000/infrastructures');
  }
  getExcel(){
    return this.http.get('http://localhost:8000/get_excel');
  }
  createPqr(data: Pqr) {
    return this.http.post('http://localhost:8000/api', data);
  }
}
