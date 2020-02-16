import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import * as Mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor() {}
  title = 'view';
  mapa: Mapboxgl.Map;
  ionViewDidEnter() {
    this.createMap();
  }
  createMap() {
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
    geolocate.on('geolocate', (e)  => {
      const lon = e.coords.longitude;
      const lat = e.coords.latitude;
      const position = [lon, lat];
      this.crearMarcador(lon, lat);
      console.log(position);
    });
  }
  crearMarcador(lng: number, lat: number) {
    const marker = new Mapboxgl.Marker({
      draggable: true
    })
      .setLngLat([lng, lat])
      .addTo(this.mapa);
    marker.on('dragend', () => console.log(marker.getLngLat()));
  }
}
