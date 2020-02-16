import { Injectable } from '@angular/core';
// Models
import {Pqr} from '../interfaces/pqr';
import {ProblemList} from '../interfaces/problem-list';
import {Neighbors} from '../interfaces/neighbors';
// Http
import {HttpClient} from '@angular/common/http';
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
  createPqr(data: Pqr) {
    return this.http.post('http://localhost:8000/api', data);
  }
}
