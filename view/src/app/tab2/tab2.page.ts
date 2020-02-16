import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import * as Mapboxgl from 'mapbox-gl';
import { PqrService } from '../services/pqr.service';
import { Pqr } from '../interfaces/pqr';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  pqrs: Pqr[] = [];
  constructor(private pqrService: PqrService) {
  }
  title = 'view';
  mapa: Mapboxgl.Map;
  ionViewDidEnter() {
    this.pqrService.getPqrs().subscribe(
      resp => {
        this.pqrs = resp;
        this.createMap(this.pqrs);
      }
    );
    console.log(this.pqrs);
  }
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
    const geolocate = new   Mapboxgl.GeolocateControl();
    this.mapa.addControl(geolocate);
    geolocate.on('geolocate', (e,pqrs)  => {
      const lon = e.coords.longitude;
      const lat = e.coords.latitude;
      const position = [lon, lat];
      this.crearMarcador(lon, lat);
    });
    if(pqrs.length > 0){
      pqrs.forEach(pqr => this.crearMarcador(pqr.long, pqr.lat));
    }
  }
  crearMarcador(lng: number, lat: number) {
    const marker = new Mapboxgl.Marker({
      draggable: true,
      color: 'red'
    })
      .setLngLat([lng, lat])
      .addTo(this.mapa);
    marker.on('dragend', () => console.log(marker.getLngLat()));
  }
}
