import { Component, OnInit } from '@angular/core';
import { PqrService } from '../services/pqr.service';
import {
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';
import { ProblemList } from '../interfaces/problem-list';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  form: FormGroup;
  problems: ProblemList[] = [];
  constructor(private pqrService: PqrService, private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.pqrService.getProblem_list().subscribe(
      resp => this.problems = resp,
      err => console.log(err)
    );
    this.makeForm();
  }
  makeForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      in_type: ['', Validators.required],
      in_code: ['', Validators.required],
      problem_id: ['', Validators.required],
      address: ['', Validators.required],
      issue: ['', Validators.required],
      phone: ['', Validators.required, Validators.maxLength(10), Validators.pattern('/^[0-9]*$/')],
      lat: ['', Validators.required, Validators],
      long: ['', Validators.required]
    });
  }
  click(){
    const data = {
      name: this.form.value.name,
      surname: this.form.value.surname,
      in_type: this.form.value.in_type,
      in_code: this.form.value.in_code,
      problem_id: this.form.value.problem_id,
      address: this.form.value.address,
      issue: this.form.value.issue,
      phone: this.form.value.phone,
      lat: this.form.value.lat,
      long: this.form.value.long
    };
    this.pqrService.createPqr(data).subscribe(resp => console.log(resp));
  }
}
