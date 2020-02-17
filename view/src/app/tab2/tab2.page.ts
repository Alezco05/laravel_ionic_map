import { Component, OnInit } from "@angular/core";
import { environment } from "../../environments/environment.prod";
import * as Mapboxgl from "mapbox-gl";
import { PqrService } from "../services/pqr.service";
import { Pqr } from "../interfaces/pqr";
import { Neighbors } from "../interfaces/neighbors";
@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  title = "view";
  pqrs: Pqr[] = [];
  mapa: Mapboxgl.Map;
  options: any[] = [];
  barrio: number = 0;
  infraestructura: number = 0;
  problema: number = 0;
  marker: Mapboxgl.Marker;
  currentMarkers = [];
  ionViewDidEnter() {
    this.pqrService.getPqrs().subscribe(resp => {
      this.pqrs = resp;
      this.createMap(this.pqrs);
    });
    this.pqrService
      .getPqrs_neighbor()
      .subscribe(resps => this.fillOptions(resps));
  }
  fillOptions(resps) {
    resps.forEach(resp => {
      this.options.push(resp);
    });
  }
  constructor(private pqrService: PqrService) {}

  // Funciones del MAPA
  createMap(pqrs: Pqr[]) {
    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.mapa = new Mapboxgl.Map({
      container: "mapa", // container id
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [-74.810913, 10.985246], // LNG, LAT
      zoom: 14 // starting zoom
    });
    // Add zoom and rotation controls to the map.
    this.mapa.addControl(new Mapboxgl.NavigationControl());
    if (pqrs.length > 0) {
      pqrs.forEach(pqr => this.crearMarcador(pqr.issue, pqr.long, pqr.lat));
    }
  }
  crearMarcador(text: string, lng: number, lat: number) {
    const popup = new Mapboxgl.Popup({ offset: 25 }).setText(text);
    this.marker = new Mapboxgl.Marker({
      draggable: true,
      color: "red"
    })
      .setLngLat([lng, lat])
      .setPopup(popup)
      .addTo(this.mapa);
    this.currentMarkers.push(this.marker);
  }
  // Filtrar Barrios
  ordenarBarrios(e) {
    if (this.currentMarkers !== null) {
      for (let i = this.currentMarkers.length - 1; i >= 0; i--) {
        this.currentMarkers[i].remove();
      }
    }
    if (this.pqrs.length > 0) {
      this.pqrs.forEach(pqr => {
        if (pqr.neighbor_id == e) {
          this.crearMarcador(pqr.issue, pqr.long, pqr.lat);
        }
      });
    }
  }
  click(e){
    if(this.barrio === 0 || this.infraestructura === 0 || this.problema === 0){
      alert('Formulario Invalido');
      return;
    }
    if (this.currentMarkers !== null) {
      for (let i = this.currentMarkers.length - 1; i >= 0; i--) {
        this.currentMarkers[i].remove();
      }
    }
    console.log("Barrio",this.barrio)
    
    console.log("Infra",this.infraestructura)
    
    console.log("Problem",this.problema)
    if (this.pqrs.length > 0) {
      this.pqrs.forEach(pqr => {
        console.log(pqr);
        if (pqr.neighbor_id == this.barrio && pqr.infrastructure_id == this.infraestructura && pqr.problem_id == this.problema) {
          this.crearMarcador(pqr.issue, pqr.long, pqr.lat);
        }
      });
    }
  }
}
