import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import * as Mapboxgl from 'mapbox-gl';
import { PqrService } from '../services/pqr.service';
import { Pqr } from '../interfaces/pqr';
import { Neighbors } from '../interfaces/neighbors';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  title = 'view';
  pqrs: Pqr[] = [];
  mapa: Mapboxgl.Map;
  options: string[] = [];
  ordenarOption: string;
  marker: Mapboxgl.Marker;
  currentMarkers=[];
  ionViewDidEnter() {
    this.pqrService.getPqrs().subscribe(resp => {
      this.pqrs = resp;
      this.createMap(this.pqrs);
    });
  }
  constructor(private pqrService: PqrService) {
    this.pqrService
      .getPqrs_neighbor()
      .subscribe(resps => this.fillOptions(resps));
  }
  fillOptions(resps) {
    resps.forEach(resp => {
      this.options.push(resp.name);
    });
  }

  // Funciones del MAPA
  createMap(pqrs: Pqr[]) {
    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
      container: 'mapa', // container id
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
        const lon = e.coords.longitude;
        const lat = e.coords.latitude;
        this.crearMarcador(lon, lat);
      }
    );
    if (pqrs.length > 0) {
      pqrs.forEach(pqr => this.crearMarcador(pqr.long, pqr.lat));
    }
  }
  crearMarcador(lng: number, lat: number) {
    this.marker = new Mapboxgl.Marker({
      draggable: true,
      color: 'red'
    })
      .setLngLat([lng, lat])
      .addTo(this.mapa);
    this.currentMarkers.push(this.marker);
      }
  // Filtrar Barrios
  ordenarBarrios() {
    if (this.currentMarkers !== null) {
      for (let i = this.currentMarkers.length - 1; i >= 0; i--) {
        this.currentMarkers[i].remove();
      }
  }
  }
}
