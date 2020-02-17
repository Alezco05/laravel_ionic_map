import { Component, OnInit } from '@angular/core';
import { PqrService } from '../services/pqr.service';
import { environment } from '../../environments/environment.prod';
import * as Mapboxgl from 'mapbox-gl';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProblemList } from '../interfaces/problem-list';
import { Neighbors } from '../interfaces/neighbors';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  form: FormGroup;
  problems: ProblemList[] = [];
  neighbors: Neighbors[] = [];
  mapa: Mapboxgl.Map;
  lat =  10.985246;
  long = -74.810913;
  marker;
  constructor(
    private pqrService: PqrService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {
    this.pqrService.getProblem_list().subscribe(
      resp => this.problems = resp,
      err => console.log(err)
    );
    this.pqrService.getNeighbor_list().subscribe(
      resp => this.neighbors = resp,
      err => console.log(err)
    );
    this.makeForm();
  }
  ionViewDidEnter() {
    this.createMap();
    this.crearMarcador(-74.810913, 10.985246);
  }
  makeForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      in_type: ['', Validators.required],
      in_code: ['', Validators.required],
      problem_id: ['', Validators.required],
      neighbor_id: ['', Validators.required],
      address: ['', Validators.required],
      issue: ['', Validators.required],
      phone: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern('[0-9]+')
        ]
      ]
    });
  }
  click() {
    const data = {
      name: this.form.value.name,
      surname: this.form.value.surname,
      in_type: this.form.value.in_type,
      in_code: this.form.value.in_code,
      problem_id: this.form.value.problem_id,
      neighbor_id: this.form.value.neighbor_id,
      address: this.form.value.address,
      issue: this.form.value.issue,
      phone: this.form.value.phone,
      lat: this.lat,
      long: this.long
    };
    console.log(data);
    this.pqrService.createPqr(data).subscribe(
      resp => {
        this.router.navigate(['tabs/tab2']);
        this.form.reset();
      },
      err => console.log(err)
    );
  }
  // Creado Del Mapa
  createMap() {
    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
      container: 'mapa2', // container id
      style: 'mapbox://styles/mapbox/outdoors-v11',
      center: [-74.810913, 10.985246], // LNG, LAT
      zoom: 14 // starting zoom
    });
    // Add zoom and rotation controls to the map.
    this.mapa.addControl(new Mapboxgl.NavigationControl());
    const geolocate = new Mapboxgl.GeolocateControl();
    this.mapa.addControl(geolocate);
    geolocate.on(
      'geolocate',
      (e: { coords: { longitude: number; latitude: number } }) => {
        this.long = e.coords.longitude;
        this.lat = e.coords.latitude;
        if (typeof this.marker === 'object') {
          this.marker.remove();
        }
        this.crearMarcador(this.long, this.lat);
      }
    );
  }
  crearMarcador(lng: number, lat: number) {
    this.marker = new Mapboxgl.Marker({
      draggable: true,
      color: 'red'
    })
      .setLngLat([lng, lat])
      .addTo(this.mapa);
    this.marker.on('dragend', () => {
      this.long = this.marker.getLngLat().lng;
      this.lat = this.marker.getLngLat().lat;
    });
  }
}
